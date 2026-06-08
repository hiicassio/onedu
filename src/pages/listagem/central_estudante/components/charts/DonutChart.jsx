/**
 * DonutChart — SVG usando stroke-dasharray.
 * data: [{ label: string, value: number, color: string }]
 */
const DonutChart = ({ data = [], size = 120, thickness = 22 }) => {
    const r   = (size - thickness) / 2;
    const cx  = size / 2;
    const cy  = size / 2;
    const circ = 2 * Math.PI * r;

    const total = data.reduce((s, d) => s + d.value, 0) || 1;

    let offset = circ * 0.25; // start from top

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <svg width={size} height={size} style={{ flexShrink: 0 }}>
                {/* track */}
                <circle
                    cx={cx} cy={cy} r={r}
                    fill="none"
                    stroke="#F0F0F0"
                    strokeWidth={thickness}
                />
                {data.map((d, i) => {
                    const portion = (d.value / total) * circ;
                    const el = (
                        <circle
                            key={i}
                            cx={cx} cy={cy} r={r}
                            fill="none"
                            stroke={d.color}
                            strokeWidth={thickness}
                            strokeDasharray={`${portion} ${circ - portion}`}
                            strokeDashoffset={offset}
                            strokeLinecap="butt"
                            style={{ transition: 'stroke-dasharray .4s' }}
                        />
                    );
                    offset -= portion;
                    return el;
                })}
            </svg>

            {/* Legend */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {data.map((d, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                        <span style={{
                            width: 11, height: 11,
                            borderRadius: '50%',
                            background: d.color,
                            flexShrink: 0,
                        }} />
                        <span style={{ fontSize: 11, color: '#444' }}>{d.label}</span>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#00397B', marginLeft: 4 }}>
                            {d.value}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonutChart;
