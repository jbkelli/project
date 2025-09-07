import pandas as pd
import numpy as np
import yfinance as yf
import talib as ta
from datetime import datetime, timedelta
import matplotlib.pyplot as plt
import warnings
warnings.filterwarnings('ignore')

class ForexAnalysisBot:
    def __init__(self, symbol='EURUSD=X', period='6mo', interval='1d'):
        self.symbol = symbol
        self.period = period
        self.interval = interval
        self.data = None
        self.signals = []
        
    def fetch_data(self):
        """Fetch forex data from Yahoo Finance"""
        try:
            ticker = yf.Ticker(self.symbol)
            self.data = ticker.history(period=self.period, interval=self.interval)
            print(f"Fetched {len(self.data)} records for {self.symbol}")
            return True
        except Exception as e:
            print(f"Error fetching data: {e}")
            return False
            
    def calculate_indicators(self):
        """Calculate technical indicators"""
        if self.data is None:
            print("No data available. Fetch data first.")
            return
            
        # Calculate Simple Moving Averages
        self.data['SMA_20'] = ta.SMA(self.data['Close'], timeperiod=20)
        self.data['SMA_50'] = ta.SMA(self.data['Close'], timeperiod=50)
        
        # Calculate RSI (Relative Strength Index)
        self.data['RSI'] = ta.RSI(self.data['Close'], timeperiod=14)
        
        # Calculate MACD
        self.data['MACD'], self.data['MACD_Signal'], self.data['MACD_Hist'] = ta.MACD(
            self.data['Close'], fastperiod=12, slowperiod=26, signalperiod=9)
        
        # Calculate Bollinger Bands
        self.data['BB_Upper'], self.data['BB_Middle'], self.data['BB_Lower'] = ta.BBANDS(
            self.data['Close'], timeperiod=20)
            
        # Calculate Stochastic Oscillator
        self.data['SlowK'], self.data['SlowD'] = ta.STOCH(
            self.data['High'], self.data['Low'], self.data['Close'],
            fastk_period=14, slowk_period=3, slowd_period=3)
            
        print("Technical indicators calculated successfully.")
        
    def generate_signals(self):
        """Generate trading signals based on technical analysis"""
        if self.data is None:
            print("No data available. Fetch data first.")
            return
            
        self.signals = []
        
        for i in range(1, len(self.data)):
            current = self.data.iloc[i]
            previous = self.data.iloc[i-1]
            
            signal = {
                'Date': current.name,
                'Price': current['Close'],
                'Action': 'HOLD',
                'Strength': 0,
                'Reason': []
            }
            
            # Strategy 1: Moving Average Crossover
            if previous['SMA_20'] <= previous['SMA_50'] and current['SMA_20'] > current['SMA_50']:
                signal['Action'] = 'BUY'
                signal['Strength'] += 1
                signal['Reason'].append('MA Crossover Bullish')
                
            elif previous['SMA_20'] >= previous['SMA_50'] and current['SMA_20'] < current['SMA_50']:
                signal['Action'] = 'SELL'
                signal['Strength'] += 1
                signal['Reason'].append('MA Crossover Bearish')
            
            # Strategy 2: RSI Overbought/Oversold
            if current['RSI'] > 70:
                signal['Action'] = 'SELL'
                signal['Strength'] += 1
                signal['Reason'].append(f'RSI Overbought ({current["RSI"]:.2f})')
                
            elif current['RSI'] < 30:
                signal['Action'] = 'BUY'
                signal['Strength'] += 1
                signal['Reason'].append(f'RSI Oversold ({current["RSI"]:.2f})')
            
            # Strategy 3: MACD Crossover
            if previous['MACD'] <= previous['MACD_Signal'] and current['MACD'] > current['MACD_Signal']:
                if signal['Action'] == 'BUY':
                    signal['Strength'] += 1
                else:
                    signal['Action'] = 'BUY'
                    signal['Strength'] += 0.5
                signal['Reason'].append('MACD Bullish Crossover')
                
            elif previous['MACD'] >= previous['MACD_Signal'] and current['MACD'] < current['MACD_Signal']:
                if signal['Action'] == 'SELL':
                    signal['Strength'] += 1
                else:
                    signal['Action'] = 'SELL'
                    signal['Strength'] += 0.5
                signal['Reason'].append('MACD Bearish Crossover')
            
            # Strategy 4: Bollinger Bands
            if current['Close'] < current['BB_Lower']:
                if signal['Action'] == 'BUY':
                    signal['Strength'] += 1
                else:
                    signal['Action'] = 'BUY'
                    signal['Strength'] += 0.5
                signal['Reason'].append('Price below Lower Bollinger Band')
                
            elif current['Close'] > current['BB_Upper']:
                if signal['Action'] == 'SELL':
                    signal['Strength'] += 1
                else:
                    signal['Action'] = 'SELL'
                    signal['Strength'] += 0.5
                signal['Reason'].append('Price above Upper Bollinger Band')
            
            # Only add signals with some strength
            if signal['Strength'] > 0:
                self.signals.append(signal)
                
        print(f"Generated {len(self.signals)} trading signals.")
        
    def get_current_signal(self):
        """Get the most recent trading signal"""
        if not self.signals:
            return None
            
        return self.signals[-1]
        
    def get_recommendation(self):
        """Get a simple trading recommendation"""
        signal = self.get_current_signal()
        if not signal:
            return "No clear trading signal at the moment."
            
        action = signal['Action']
        strength = signal['Strength']
        reasons = ", ".join(signal['Reason'])
        price = signal['Price']
        date = signal['Date'].strftime('%Y-%m-%d')
        
        if strength >= 2:
            confidence = "High confidence"
        elif strength >= 1:
            confidence = "Medium confidence"
        else:
            confidence = "Low confidence"
            
        return f"As of {date}, with price at {price:.5f}: {action} ({confidence}). Reasons: {reasons}"
        
    def plot_data(self):
        """Plot the price data and indicators"""
        if self.data is None:
            print("No data to plot.")
            return
            
        fig, axes = plt.subplots(3, 1, figsize=(12, 10))
        
        # Price and Moving Averages
        axes[0].plot(self.data.index, self.data['Close'], label='Close Price')
        axes[0].plot(self.data.index, self.data['SMA_20'], label='20 SMA', alpha=0.7)
        axes[0].plot(self.data.index, self.data['SMA_50'], label='50 SMA', alpha=0.7)
        axes[0].set_title(f'{self.symbol} Price and Moving Averages')
        axes[0].legend()
        axes[0].grid(True)
        
        # RSI
        axes[1].plot(self.data.index, self.data['RSI'], label='RSI', color='purple')
        axes[1].axhline(70, linestyle='--', color='red', alpha=0.7)
        axes[1].axhline(30, linestyle='--', color='green', alpha=0.7)
        axes[1].set_title('Relative Strength Index (RSI)')
        axes[1].set_ylim(0, 100)
        axes[1].legend()
        axes[1].grid(True)
        
        # MACD
        axes[2].plot(self.data.index, self.data['MACD'], label='MACD', color='blue')
        axes[2].plot(self.data.index, self.data['MACD_Signal'], label='Signal', color='red')
        axes[2].bar(self.data.index, self.data['MACD_Hist'], label='Histogram', color='gray', alpha=0.3)
        axes[2].set_title('MACD')
        axes[2].legend()
        axes[2].grid(True)
        
        plt.tight_layout()
        plt.show()
        
    def run_analysis(self):
        """Run complete analysis"""
        print("Starting forex analysis...")
        if self.fetch_data():
            self.calculate_indicators()
            self.generate_signals()
            recommendation = self.get_recommendation()
            print("\n" + "="*60)
            print("TRADING RECOMMENDATION:")
            print("="*60)
            print(recommendation)
            print("="*60)
            
            # Show recent signals
            if self.signals:
                print("\nRecent signals:")
                for signal in self.signals[-5:]:
                    print(f"{signal['Date'].strftime('%Y-%m-%d')}: {signal['Action']} "
                          f"(Strength: {signal['Strength']}) - {', '.join(signal['Reason'][:2])}")
            
            return True
        return False

# Example usage
if __name__ == "__main__":
    # Initialize the bot with your preferred currency pair
    bot = ForexAnalysisBot(symbol='EURUSD=X', period='3mo', interval='1d')
    
    # Run the analysis
    bot.run_analysis()
    
    # Ask if user wants to see the chart
    show_chart = input("\nDo you want to see the analysis chart? (y/n): ").lower()
    if show_chart == 'y':
        bot.plot_data()