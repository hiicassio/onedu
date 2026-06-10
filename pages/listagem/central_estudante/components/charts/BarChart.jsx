/**
 * BarChart — SVG simples, sem dependências externas.
 * data: [{ label: string, value: number, color?: string }]
 */
const BarChart = ({
    data = [],
    height = 120,
    barColor = '#00397B',
    labelColor = '#999',
    showLabels = true,
    gap = 8,
}) => {
    const max = Math.max(...data.map(d => d.value), 1);
    const barW = 24;
    const totalW = data.length * (barW + gap);
    const chartH = showLabels ? height - 16 : height;

    return (
        <svg
            width="100%"
            height={height}
            viewBox={`0 0 ${totalW} ${height}`}
            preserveAspectRatio="xMidYMid meet"
            style={{ overflow: 'visible' }}
        >
            {data.map((d, i) => {
                const bh = Math.max(2, (d.value / max) * (chartH - 4));
                const x  = i * (barW + gap);
                const y  = chartH - bh;
                const fill = d.color || barColor;
                return (
                    <g key={i}>
                        <rect x={x} y={y} width={barW} height={bh} fill={fill} rx={3} />
                        {showLabels && (
                            <text
                                x={x + barW / 2}
                                y={height - 2}
                                textAnchor="middle"
                                fontSize={9}
                                fill={labelColor}
                            >
                                {d.label}
                            </text>
                        )}
                    </g>
                );
            })}
        </svg>
    );
};

export default BarChart;
