import tkinter as tk
from tkinter import ttk, messagebox
from forex_bot import ForexAnalysisBot
import threading

class ForexBotGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Forex Analysis Bot")
        self.root.geometry("600x400")
        self.bot = None
        
        self.setup_ui()
        
    def setup_ui(self):
        # Main frame
        main_frame = ttk.Frame(self.root, padding="20")
        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Title
        title_label = ttk.Label(main_frame, text="Forex Market Analysis Bot", 
                               font=("Arial", 16, "bold"))
        title_label.grid(row=0, column=0, columnspan=2, pady=10)
        
        # Currency pair selection
        ttk.Label(main_frame, text="Currency Pair:").grid(row=1, column=0, sticky=tk.W, pady=5)
        self.pair_var = tk.StringVar(value="EURUSD=X")
        pair_combo = ttk.Combobox(main_frame, textvariable=self.pair_var, width=15)
        pair_combo['values'] = ('EURUSD=X', 'GBPUSD=X', 'USDJPY=X', 'USDCHF=X', 
                               'AUDUSD=X', 'USDCAD=X', 'NZDUSD=X')
        pair_combo.grid(row=1, column=1, sticky=tk.W, pady=5)
        
        # Period selection
        ttk.Label(main_frame, text="Period:").grid(row=2, column=0, sticky=tk.W, pady=5)
        self.period_var = tk.StringVar(value="3mo")
        period_combo = ttk.Combobox(main_frame, textvariable=self.period_var, width=15)
        period_combo['values'] = ('1mo', '3mo', '6mo', '1y', '2y')
        period_combo.grid(row=2, column=1, sticky=tk.W, pady=5)
        
        # Interval selection
        ttk.Label(main_frame, text="Interval:").grid(row=3, column=0, sticky=tk.W, pady=5)
        self.interval_var = tk.StringVar(value="1d")
        interval_combo = ttk.Combobox(main_frame, textvariable=self.interval_var, width=15)
        interval_combo['values'] = ('1d', '1h', '30m')
        interval_combo.grid(row=3, column=1, sticky=tk.W, pady=5)
        
        # Analyze button
        analyze_btn = ttk.Button(main_frame, text="Analyze Market", command=self.start_analysis)
        analyze_btn.grid(row=4, column=0, columnspan=2, pady=20)
        
        # Results area
        ttk.Label(main_frame, text="Analysis Results:", font=("Arial", 12, "bold")).grid(
            row=5, column=0, sticky=tk.W, pady=(20, 5))
        
        self.result_text = tk.Text(main_frame, height=12, width=70)
        self.result_text.grid(row=6, column=0, columnspan=2, pady=5)
        
        # Scrollbar for results
        scrollbar = ttk.Scrollbar(main_frame, orient=tk.VERTICAL, command=self.result_text.yview)
        scrollbar.grid(row=6, column=2, sticky=(tk.N, tk.S))
        self.result_text['yscrollcommand'] = scrollbar.set
        
        # Configure grid weights
        self.root.columnconfigure(0, weight=1)
        self.root.rowconfigure(0, weight=1)
        main_frame.columnconfigure(1, weight=1)
        
    def start_analysis(self):
        # Disable button during analysis
        self.result_text.delete(1.0, tk.END)
        self.result_text.insert(tk.END, "Analyzing market data... Please wait.\n")
        
        # Run analysis in a separate thread to prevent UI freezing
        thread = threading.Thread(target=self.run_analysis)
        thread.daemon = True
        thread.start()
        
    def run_analysis(self):
        try:
            # Get user selections
            symbol = self.pair_var.get()
            period = self.period_var.get()
            interval = self.interval_var.get()
            
            # Initialize and run bot
            self.bot = ForexAnalysisBot(symbol, period, interval)
            success = self.bot.run_analysis()
            
            if success:
                # Get recommendation
                recommendation = self.bot.get_recommendation()
                
                # Update UI with results
                self.root.after(0, self.update_results, recommendation)
            else:
                self.root.after(0, lambda: self.result_text.insert(
                    tk.END, "Failed to fetch data. Please check your internet connection."))
                
        except Exception as e:
            self.root.after(0, lambda: self.result_text.insert(
                tk.END, f"An error occurred: {str(e)}"))
            
    def update_results(self, recommendation):
        self.result_text.delete(1.0, tk.END)
        self.result_text.insert(tk.END, recommendation)
        
        # Add recent signals
        if self.bot and self.bot.signals:
            self.result_text.insert(tk.END, "\n\nRecent signals:\n")
            for signal in self.bot.signals[-5:]:
                self.result_text.insert(
                    tk.END, 
                    f"{signal['Date'].strftime('%Y-%m-%d')}: {signal['Action']} "
                    f"(Strength: {signal['Strength']:.1f})\n"
                )

if __name__ == "__main__":
    root = tk.Tk()
    app = ForexBotGUI(root)
    root.mainloop()