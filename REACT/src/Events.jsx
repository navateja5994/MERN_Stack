function Events() {

    function press(e) {
        alert("Key pressed: " + e.key);
    }

    return (
        <>
            <div>
                <button
                    onMouseOver={() => alert("Jerry Files.")}>
                    Jerry
                </button>

                <button
                    onMouseOver={() => alert("Tom Files.")}>
                    Tom
                </button>
            </div>

            <br />

            <input
                onKeyDown={press}
            />
            <input 
                onFocus={()=>console.log("Focused")}
                onBlur={()=>console.log("Blured")}
            />
        </>
    );
}

export default Events;