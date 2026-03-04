

const Barplot = ({ width, color, type } ) => {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div
                style={{
                    width: width,
                    height: 10,
                    backgroundColor: color,
                    borderRadius: 4,
                }}>
            </div>
            <span>{type}: {width}</span>
        </div>
    );
}

export default Barplot;