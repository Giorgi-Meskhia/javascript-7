function Timeout(delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}


Timeout(2000).then(() => {
    console.log("2 წამი გავიდა!");
});



const mySetTimeout = (delay) => new Promise(resolve => setTimeout(resolve, delay));

const makeToy = (id, delay = 3000) => 
    mySetTimeout(delay).then(() => {
        console.log(`სათამაშო ${id} დამზადდა!`);
        return id;
    });

const deliverToy = (id, delay = 2000) => 
    mySetTimeout(delay).then(() => {
        console.log(`სათამაშო ${id} მიწოდებულია!`);
        return id;
    });

const sellToy = (id, delay = 1000) => 
    mySetTimeout(delay).then(() => {
        if (Math.random() > 0.2) {
            console.log(`სათამაშო ${id} გაიყიდა!`);
        } else {
            throw new Error(`სათამაშო ${id} ვერ გაიყიდა!`);
        }
    });

// ES6 with .then().catch()
makeToy(1)
    .then(deliverToy)
    .then(sellToy)
    .catch(error => console.error(error.message));

// ES6 with async/await
const processToy = async (id) => {
    try {
        await makeToy(id);
        await deliverToy(id);
        await sellToy(id);
    } catch (error) {
        console.error(error.message);
    }
};

processToy(2);
