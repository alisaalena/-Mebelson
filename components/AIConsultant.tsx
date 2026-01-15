
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiConsultantResponse } from '../services/geminiService';
import { Message } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Здравствуйте! Я ваш персональный бизнес-ассистент Mebelson. Какой вопрос по ассортименту или условиям работы вас интересует?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    const response = await getGeminiConsultantResponse(input);
    const modelMessage: Message = { role: 'model', text: response };
    setMessages(prev => [...prev, modelMessage]);
    setIsLoading(false);
  };

  return (
    <section id="ai" className="py-24 bg-[#FBFBFB] scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Левая колонка: Текстовое описание */}
          <div className="lg:w-1/3 pt-4">
            <div className="inline-block px-3 py-1 bg-red-50 text-mebelson-red text-[10px] font-bold uppercase tracking-widest rounded mb-6">
              Интеллектуальный сервис
            </div>
            <h2 className="text-4xl font-black text-mebelson-dark mb-6 leading-[1.1] uppercase tracking-tighter">
              Ваш персональный <br/>
              <span className="text-mebelson-red">бизнес-помощник</span>
            </h2>
            <p className="text-gray-500 font-medium leading-relaxed mb-8">
              Получите мгновенную консультацию по продукции, техническим характеристикам и маркетинговым материалам в режиме реального времени.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: 'Обучение персонала', desc: 'Скрипты продаж и ключевые преимущества' },
                { title: 'Тех. поддержка', desc: 'Размеры, материалы и фурнитура' },
                { title: 'Маркетинг', desc: 'Помощь в выборе материалов для рекламы' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-mebelson-border shadow-sm">
                  <div className="text-mebelson-red mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-mebelson-dark uppercase tracking-wider">{item.title}</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Правая колонка: Окно чата */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 overflow-hidden border border-mebelson-border flex flex-col h-[650px]">
              
              {/* Шапка чата */}
              <div className="px-8 py-6 bg-white border-b border-mebelson-border flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-mebelson-red rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-mebelson-dark uppercase tracking-tight">Ассистент Mebelson</h3>
                    <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest">Система активна</p>
                  </div>
                </div>
                <button className="text-gray-300 hover:text-mebelson-red transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>

              {/* Тело чата */}
              <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto space-y-6 bg-[#FAFAFA]/50 no-scrollbar">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                    <div className={`max-w-[85%] p-5 rounded-2xl text-[13px] font-medium leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-mebelson-dark text-white rounded-tr-none' 
                        : 'bg-white text-mebelson-dark border border-mebelson-border rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-mebelson-border p-4 rounded-2xl rounded-tl-none flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest ml-2">Менеджер печатает...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Поле ввода */}
              <div className="p-8 bg-white border-t border-mebelson-border">
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Напишите ваш вопрос ассистенту..." 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-5 pl-6 pr-32 text-sm text-mebelson-dark focus:outline-none focus:border-mebelson-red focus:bg-white transition-all placeholder-gray-400 font-medium shadow-inner"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2 bg-mebelson-red text-white px-6 py-3.5 rounded-xl font-black text-[11px] uppercase tracking-wider hover:bg-mebelson-dark transition-all disabled:opacity-30 shadow-lg shadow-red-500/20 active:scale-95 flex items-center space-x-2"
                  >
                    <span>Отправить</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-center space-x-6">
                   <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.2em]">Технологии Google Gemini AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
