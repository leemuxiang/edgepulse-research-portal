/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Activity, 
  Cpu, 
  ShieldAlert, 
  Layers, 
  TrendingUp, 
  Calendar, 
  ChevronRight, 
  Network,
  Zap,
  Box,
  Compass,
  ArrowRight
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { MARKET_FORECAST, RESEARCH_PHASES } from './constants';

const NavItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-3 px-6 py-3 w-full transition-all duration-200 relative ${active ? 'bg-white/5 text-white opacity-100' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`}
  >
    {active && <div className="nav-active-accent" />}
    <Icon className={`w-5 h-5 ${active ? 'text-blue-500' : 'text-slate-400'}`} />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`standard-card p-6 overflow-hidden relative group ${className}`}>
    {children}
  </div>
);

const StatCard = ({ label, value, unit, icon: Icon, color }: { label: string, value: string, unit: string, icon: any, color: string }) => (
  <Card>
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2 rounded-lg bg-slate-50 text-slate-600 border border-slate-100`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-[10px] font-mono text-slate-400 tracking-tighter font-bold">LIVE</span>
    </div>
    <div className="space-y-1">
      <p className="technical-label">{label}</p>
      <div className="flex items-baseline gap-1">
        <h3 className="text-2xl font-sans font-semibold tracking-tight text-slate-900">{value}</h3>
        <span className="text-xs text-slate-400 font-mono italic">{unit}</span>
      </div>
    </div>
  </Card>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900 font-sans selection:bg-blue-600/10">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar flex flex-col fixed h-full z-50 shadow-xl">
        <div className="flex items-center gap-3 p-8 group cursor-default">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Activity className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="font-sans font-bold text-lg tracking-tight text-white">ECRC Portal</h1>
            <p className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">Research Center</p>
          </div>
        </div>

        <nav className="flex-grow">
          <NavItem icon={Layers} label="概览与范畴" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
          <NavItem icon={TrendingUp} label="市场与趋势" active={activeTab === 'market'} onClick={() => setActiveTab('market')} />
          <NavItem icon={Cpu} label="边缘智能" active={activeTab === 'intelligence'} onClick={() => setActiveTab('intelligence')} />
          <NavItem icon={ShieldAlert} label="安全防御" active={activeTab === 'security'} onClick={() => setActiveTab('security')} />
          <NavItem icon={Calendar} label="研究路线图" active={activeTab === 'roadmap'} onClick={() => setActiveTab('roadmap')} />
        </nav>

        <div className="mt-auto p-8 border-t border-white/5">
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              正在关注 2033 年全球 <span className="text-blue-400 font-bold">10.6T</span> 的市场爆发。
            </p>
            <button className="flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-widest group">
              MORE INFO <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-64 p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="max-w-6xl"
          >
            {/* Tab Header */}
            <header className="mb-10">
              <div className="flex items-center gap-2 mb-3 text-slate-500 font-sans text-xs">
                <span>研究项目</span>
                <ChevronRight className="w-3 h-3" />
                <span>边缘计算研究</span>
                <ChevronRight className="w-3 h-3" />
                <span className="font-bold text-slate-900 underline decoration-blue-500 underline-offset-4">监控仪表盘</span>
              </div>
              <h2 className="text-3xl font-sans font-bold tracking-tight text-slate-900 mb-2">
                {activeTab === 'overview' && '概览与范畴'}
                {activeTab === 'market' && '市场规模与财务预测'}
                {activeTab === 'intelligence' && '边缘智能研究'}
                {activeTab === 'security' && '安全防御体系'}
                {activeTab === 'roadmap' && '系统化研究路线'}
              </h2>
              <p className="text-slate-500 text-base max-w-2xl">
                2025-2033 全球边缘计算与边缘智能技术趋势深度调研。
              </p>
            </header>

            {/* Overview Content */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid grid-cols-4 gap-6">
                  <StatCard icon={TrendingUp} label="复合增长率" value="44.7" unit="% CAGR" color="blue" />
                  <StatCard icon={Activity} label="边缘 AI 市场" value="256.5" unit="USD Billion" color="blue" />
                  <StatCard icon={Zap} label="极致延迟目标" value="< 1" unit="ms (Micro-edge)" color="blue" />
                  <StatCard icon={Network} label="IoT 互联规模" value="750" unit="Billion Devices" color="blue" />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <Card className="col-span-1">
                    <h4 className="text-sm font-sans font-bold mb-6 flex items-center gap-2 text-slate-800 uppercase tracking-wider">
                      <Layers className="w-4 h-4 text-blue-600" />
                      层级定义与性能标准
                    </h4>
                    <div className="space-y-4">
                      {[
                        { level: '微边缘 (Micro-edge)', dist: '0-15 米', latency: '< 1ms', desc: '工业机器人控制、传感器融合' },
                        { level: '深边缘 (Deep-edge)', dist: '< 1 公里', latency: '2-5ms', desc: '智慧厂区、城市管理' },
                        { level: '元边缘 (Meta-edge)', dist: '< 50 公里', latency: '< 10ms', desc: '区域交通、CDN 网络' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-all">
                          <div>
                            <p className="font-semibold text-slate-800 text-sm">{item.level}</p>
                            <p className="text-[10px] text-slate-500 font-sans">{item.desc}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-blue-600 font-sans font-bold text-sm">{item.latency}</p>
                            <p className="text-[10px] text-slate-400">{item.dist}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="col-span-1 flex flex-col">
                    <h4 className="text-sm font-sans font-bold mb-2 flex items-center gap-2 text-slate-800 uppercase tracking-wider">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      市场增长概览
                    </h4>
                    <p className="text-[10px] text-slate-400 mb-6 font-sans uppercase tracking-widest">Global Market Cap (USD Billion)</p>
                    <div className="flex-grow min-h-[250px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={MARKET_FORECAST}>
                          <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                          <XAxis dataKey="year" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} dy={10} />
                          <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} dx={-10} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            itemStyle={{ color: '#2563eb' }}
                          />
                          <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'market' && (
              <div className="space-y-8">
                <Card>
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h4 className="text-xl font-sans font-bold text-slate-900">2024 - 2033 增长曲线</h4>
                      <p className="text-slate-500 text-sm">反映全球边缘计算基础设施的战略迁移</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-right">
                        <p className="technical-label">基元规模 (2024)</p>
                        <p className="text-lg font-sans font-bold text-slate-900">$383.2B</p>
                      </div>
                      <div className="w-px h-10 bg-slate-200" />
                      <div className="text-right">
                        <p className="technical-label">终极目标 (2033)</p>
                        <p className="text-lg font-sans font-bold text-blue-600">$10.6T</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={MARKET_FORECAST}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                        <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} axisLine={false} />
                        <YAxis stroke="#94a3b8" fontSize={12} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '8px' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#2563eb" 
                          strokeWidth={3} 
                          dot={{ r: 4, fill: '#2563eb', strokeWidth: 0 }} 
                          activeDot={{ r: 6, strokeWidth: 0 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'roadmap' && (
              <div className="relative border-l-2 border-slate-200 ml-4 py-6 space-y-12 text-slate-900">
                {RESEARCH_PHASES.map((phase, i) => (
                  <motion.div 
                    key={phase.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-10" />
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="w-48 flex-shrink-0">
                        <p className="text-blue-600 font-sans font-bold mb-1 text-sm">{phase.period}</p>
                        <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded font-sans font-bold uppercase tracking-widest">{phase.id} PHASE</span>
                      </div>
                      <Card className="flex-grow">
                        <h4 className="text-lg font-sans font-bold mb-4 text-slate-800">{phase.title}</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <p className="technical-label mb-3">核心任务清单</p>
                            <ul className="space-y-2">
                              {phase.tasks.map((task, j) => (
                                <li key={j} className="text-sm text-slate-500 flex items-center gap-2">
                                  <ChevronRight className="w-3 h-3 text-blue-500" />
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                            <p className="technical-label mb-2">阶段性预期产出</p>
                            <p className="text-sm text-slate-600 italic font-sans font-medium">
                              "{phase.output}"
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'intelligence' && (
              <div className="space-y-8">
                <div className="grid grid-cols-3 gap-6">
                  <Card className="col-span-2">
                    <h4 className="text-sm font-sans font-bold mb-6 flex items-center gap-2 text-slate-800 uppercase tracking-wider">
                      <Cpu className="w-5 h-5 text-blue-600" />
                      边缘 AI 硬件架构多元化
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { title: '神经形态计算', tech: 'Neuromorphic', desc: '基于生物脑结构，功耗效率极高', color: 'bg-emerald-500' },
                        { title: '专用 ASIC', tech: 'TPU/NPU', desc: '针对特定深度学习任务开发的专用加速器', color: 'bg-blue-600' },
                        { title: '可重构 FPGA', tech: 'Field Programmable', desc: '灵活调整算力单元，适应快速演进的算法', color: 'bg-indigo-500' },
                        { title: '嵌入式 GPU', tech: 'Compute Units', desc: '成熟的并行处理方案，支持多路分析', color: 'bg-slate-400' }
                      ].map((hw, i) => (
                        <div key={i} className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex flex-col h-full hover:border-slate-300 transition-colors">
                          <div className={`w-1 h-8 ${hw.color} rounded-full mb-3`} />
                          <p className="font-bold text-sm mb-1 text-slate-800">{hw.title}</p>
                          <p className="text-[10px] font-mono text-blue-600 mb-2">{hw.tech}</p>
                          <p className="text-xs text-slate-500 leading-relaxed">{hw.desc}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                  <Card className="col-span-1">
                    <h4 className="text-sm font-sans font-bold mb-6 text-slate-800 uppercase tracking-wider">算法压缩技术</h4>
                    <div className="space-y-6">
                      {[
                        { name: '量化 (Quantization)', val: '80% 降幅', desc: '权重从 FP32 转为 INT8' },
                        { name: '剪枝 (Pruning)', val: '65% 降幅', desc: '移除冗余的神经元连接' },
                        { name: '知识蒸馏 (KD)', val: '精度对齐', desc: '模型引导优化' }
                      ].map((tech, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-600 font-medium">{tech.name}</span>
                            <span className="text-blue-600 font-mono italic font-bold">{tech.val}</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: tech.val.includes('80') ? '80%' : tech.val.includes('65') ? '65%' : '90%' }}
                              className="h-full bg-blue-600"
                            />
                          </div>
                          <p className="text-[10px] text-slate-400 font-medium">{tech.desc}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
                <Card className="bg-blue-600 text-white border-none shadow-blue-200 shadow-lg">
                  <h4 className="text-lg font-sans font-bold mb-4 flex items-center gap-2">
                    边缘原生模型设计
                    <Zap className="w-5 h-5" />
                  </h4>
                  <p className="text-sm opacity-90 leading-relaxed mb-6 max-w-3xl">
                    到 2029 年，预计 60% 的边缘部署将涉及 AI。研究重点正转向如何在资源受限的硬件上实现复杂推理。
                  </p>
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { icon: Box, title: '轻量化架构', desc: 'MobileNets / YOLOv11' },
                      { icon: Network, title: '边缘联邦学习', desc: '去中心化模型同步' },
                      { icon: Activity, title: '视觉传感器融合', desc: '多维数据本地快速决策' },
                      { icon: Zap, title: '极致低能耗推理', desc: 'mW 级推理功耗目标' }
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-lg bg-white/10 border border-white/20 flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-blue-200 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-bold">{item.title}</p>
                          <p className="text-[10px] opacity-70">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <Card>
                    <h4 className="text-sm font-sans font-bold mb-6 flex items-center gap-2 text-slate-800 uppercase tracking-wider">
                      <ShieldAlert className="w-5 h-5 text-blue-600" />
                      零信任架构体系
                    </h4>
                    <div className="space-y-4">
                      {[
                        { title: '持续身份验证', desc: '无论设备位置，每次连接需经过动态验证' },
                        { title: '最小权限原则', desc: '仅授权执行特定任务所需的最低权限' },
                        { title: '微隔离技术', desc: '将违规行为限制在极小的局部隔离网格内' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                          <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                            0{i+1}
                          </div>
                          <div>
                            <p className="text-sm font-bold mb-1 text-slate-800">{item.title}</p>
                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                  <Card>
                    <h4 className="text-sm font-sans font-bold mb-6 flex items-center gap-2 text-slate-800 uppercase tracking-wider">
                      <Activity className="w-5 h-5 text-blue-600" />
                      AI 协同威胁检测
                    </h4>
                    <div className="p-6 rounded-lg bg-slate-900 text-white relative overflow-hidden h-full shadow-inner">
                      <p className="text-[10px] text-slate-500 mb-4 font-mono tracking-widest">SYSTEM SECURITY MONITOR</p>
                      <div className="space-y-4">
                        <div className="h-1 w-3/4 bg-slate-800 rounded-full animate-pulse" />
                        <div className="h-1 w-1/2 bg-slate-800 rounded-full animate-pulse delay-75" />
                        <div className="h-1 w-2/3 bg-slate-800 rounded-full animate-pulse delay-150" />
                        <div className="mt-8 p-4 rounded bg-white/5 border border-white/10">
                          <p className="text-[10px] text-blue-400 font-mono mb-1 font-bold">EVENT LOG: SEV_HIGH</p>
                          <p className="text-xs text-slate-300">检测到边缘节点 13-BF 可能存在 DDoS 攻击，自动启动微隔离防御方案。</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                <Card className="border-blue-100 bg-blue-50/30">
                  <h4 className="text-sm font-sans font-bold mb-2 text-slate-800 uppercase tracking-wider">量子抗性加密 (Post-Quantum)</h4>
                  <p className="text-sm text-slate-500">
                    针对 2030 年代量子计算的潜在威胁，提前部署 PQC 协议，确保长周期数据的完整性与安全性。
                  </p>
                </Card>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
