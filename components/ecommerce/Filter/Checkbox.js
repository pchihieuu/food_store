const CheckBox = ({ filters, handleCheckBox }) => {
    return (
        <>
            {filters.map((item, id) => (
                <div key={id}>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name={item.name}
                        value={item.value}
                        checked={item.checked}
                        onChange={(e) => handleCheckBox(e)}
                        id={item.value}
                        
                    />
                    <label className="form-check-label" htmlFor={item.value} style={{textTransform:"capitalize"}}> {item.value}</label>
                    <br/>
                </div>
            ))}
        </>
    );
};

export default CheckBox;
