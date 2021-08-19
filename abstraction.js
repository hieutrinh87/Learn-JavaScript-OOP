function Circle(radius){
    this.radius = radius;
    let defaultLocation = {x:0, y:0};

    let computeOptimumLocation = function(factor) {
        //...
    }

    this.draw = function(){
        computeOptimumLocation(0.1);
        console.log('Draw');
    }
}

const circle = new Circle(10);

// Note: public function use this.properties,
// private: use let 