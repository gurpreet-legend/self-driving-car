const canvas = document.getElementById("myCanvas")
canvas.width = 200

const ctx = canvas.getContext("2d")
const road = new Road(canvas.width/2, canvas.width*0.9)
// const car = new Car(road.getLaneCenter(1), 100, 30, 50, "KEYS")
const car = new Car(road.getLaneCenter(1), 100, 30, 50, "DUMMY")
const traffic = [
    new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 2)
]

animate();

function animate(){
    // animating traffic
    for(let i=0; i<traffic.length; i++) {
        traffic[i].update(road.borders, []);
    }
    // animating our car
    car.update(road.borders, traffic);

    canvas.height = window.innerHeight // This can resize the canvas as well as resets it

    ctx.save()
    ctx.translate(0, -car.y + canvas.height*0.7)

    road.draw(ctx);
    for(let i=0; i<traffic.length; i++) { //traffic
        traffic[i].draw(ctx, "red");
    }
    car.draw(ctx, "blue"); //car

    ctx.restore()
    requestAnimationFrame(animate);
}
