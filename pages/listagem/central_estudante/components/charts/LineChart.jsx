/**
 * LineChart — SVG com polyline + área de preenchimento.
 * data: number[]
 */
const LineChart = ({
    data = [],
    width = 300,
    height = 80,
    color = '#197DFF',
    fillOpacity = 0.12,
    dotRadius = 3,
}) => {
    if (data.length < 2) return null;

    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const pad = 6;

    const pts = data.map((v, i) => ({
        x: pad + (i / (data.length - 1)) * (width - pad * 2),
        y: pad + (1 - (v - min) / range) * (height - pad * 2),
    }));

    const polyline = pts.map(p => `${p.x},${p.y}`).join(' ');
    const area = `M ${pts[0].x},${height} ${pts.map(p => `L ${p.x},${p.y}`).join(' ')} L ${pts[pts.length - 1].x},${height} Z`;

    return (
        <svg
            width="100%"
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
        >
            <path d={area} fill={color} fillOpacity={fillOpacity} />
            <polyline
                points={polyline}
                fill="none"
                stroke={color}
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            {pts.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={dotRadius} fill={color} />
            ))}
        </svg>
    );
};

export default LineChart;
