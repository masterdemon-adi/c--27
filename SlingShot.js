class SlingShot{
    constructor(bodyA,bodyB){
        var option = {
            bodyA: bodyA,
            bodyB:bodyB, 
            length: 10,
            stiffness: 0.04

        }
        this.SlingShot = Constraint.create(option);
            World.add(world,this.SlingShot)
            
    }
display(){
    var posA = this.SlingShot.bodyA.position
    var posB = this.SlingShot.bodyB.position
    strokeWeight(4)
    line (posA.x,posA.y, posB.x, posB.y)
}

}