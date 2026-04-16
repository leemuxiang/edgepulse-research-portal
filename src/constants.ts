export interface MarketData {
  year: string;
  value: number;
}

export interface ResearchPhase {
  id: string;
  title: string;
  period: string;
  tasks: string[];
  output: string;
}

export const MARKET_FORECAST: MarketData[] = [
  { year: '2024', value: 383.2 },
  { year: '2025', value: 554.4 },
  { year: '2027', value: 1120.5 },
  { year: '2029', value: 2450.8 },
  { year: '2031', value: 5890.2 },
  { year: '2033', value: 10656.3 },
];

export const RESEARCH_PHASES: ResearchPhase[] = [
  {
    id: 'P1',
    title: '理论框架与环境搭建',
    period: '2025 Q1-Q2',
    tasks: ['边缘计算标准化协议梳理', 'EdgeCloudSim / NS-3 环境配置', '基准算法选择'],
    output: '需求规格说明书 & 基准性能指标'
  },
  {
    id: 'P2',
    title: '核心算法研发与验证',
    period: '2025 Q3 - 2026 Q2',
    tasks: ['PPO 多目标优化调度策略', '语义通信编解码器原型', '低功耗推理框架'],
    output: '核心算法代码库 & 实验报告'
  },
  {
    id: 'P3',
    title: '系统集成与行业测试',
    period: '2026 Q3 - 2027 Q2',
    tasks: ['私有 5G 网络集成', '工业网关实地测试', '数字孪生同步优化'],
    output: '行业应用白皮书 & 系统稳定性报告'
  },
  {
    id: 'P4',
    title: '6G 融合与规模化扩展',
    period: '2027 Q3 - 2028 Q4',
    tasks: ['大规模语义通信效用测试', '零信任安全套件部署', '全链路可视化监控'],
    output: '商业化部署建议方案'
  }
];
