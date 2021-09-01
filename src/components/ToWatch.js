import React, { useState, useEffect } from "react"

const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    if (list) {
        return JSON.parse(localStorage.getItem("lists"));
    } else {
        return []
    }
};

const ToWatch = () => {

    const [inputData, setInputData] = useState("");

    const [items, setItems] = useState(getLocalItems());


    const addItem = () => {
        if (!inputData) {
            alert("The field must contain something");
        }
        else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData("");
        }

    }

    const deleteItem = (id) => {
        const updatedItems = items.filter((elem) => {
            return elem.id !== id;
        })
        setItems(updatedItems);
    }


    // remove all the data 
    const remvoveAll = () => {
        setItems([]);
    }


    // add data to localStorage
    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(items));
    }, [items]);

    return (
        <>
            <div className="main-div d-flex">
                <div>
                    <p className="fw-bold fs-3 p-2 text-center">Add your watch list here;) </p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Add item..."
                            aria-describedby="button-addon2"
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" title="Add item"
                            onClick={addItem}>
                            Add
                        </button>
                    </div>

                    <div>
                        {
                            items.map((elem) => {
                                return (
                                    <div className="input-group mb-3" key={elem.id}>
                                        <input type="text" className="form-control" value={elem.name} />
                                        <button className="btn btn-outline-secondary" type="button" title="Delete item"
                                            onClick={() => deleteItem(elem.id)}>
                                            Delete
                                        </button>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className="showItems">
                        <button className="btn btn-outline-dark" data-sm-link-text="Remove All" target="_blank"
                            onClick={remvoveAll}>
                            Remove All
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ToWatch;