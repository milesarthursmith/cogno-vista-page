import { Radar, RadarChart as RechartsRadar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

interface RadarChartProps {
  cultural: number;
  technical: number;
  useCase: number;
}

export const RadarChart = ({ cultural, technical, useCase }: RadarChartProps) => {
  const data = [
    { dimension: "Culture", score: cultural },
    { dimension: "Technology", score: technical },
    { dimension: "Process", score: useCase },
  ];

  return (
    <div className="w-full h-[450px] flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadar data={data} margin={{ top: 40, right: 60, bottom: 40, left: 60 }}>
          <PolarGrid stroke="hsl(var(--border))" strokeWidth={1.5} />
          <PolarAngleAxis 
            dataKey="dimension" 
            tick={{ fill: "hsl(var(--foreground))", fontSize: 16, fontFamily: "var(--font-serif)", fontWeight: 500 }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]} 
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 14 }}
            tickCount={6}
          />
          <Radar
            dataKey="score"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.25}
            strokeWidth={3}
          />
        </RechartsRadar>
      </ResponsiveContainer>
    </div>
  );
};