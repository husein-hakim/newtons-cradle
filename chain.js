class chain{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            stiffness:0.07,
            length:10
        }
        this.chain = Constraint.create(options)
        World.add(world, this.chain)
    }

    display(){
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.offsetX, this.offsetY)
    }
}