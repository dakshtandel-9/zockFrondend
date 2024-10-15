import React from 'react';
function WhyUs() {

    const data = [
        { key: 'a', value: 2 },
        { key: 'b', value: 5 },
        { key: 'c', value: 7 }
    ]

    return (
        <div>
            {
                data.map((item, index) => {
                    return (
                        <div>
                            <h2>{item.key}</h2>
                            <p>{item.value}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default WhyUs;