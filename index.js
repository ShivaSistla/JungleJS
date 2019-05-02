var tigerCount=0;
var monkeyCount=0;
var snakeCount=0;
class Animals
{
  constructor()
  {
    this.energy=0;
    this.tired=true;
  }
  
  makeASound()
  {
    this.energy -= 3;
  }
  
  eatFood()
  {
    this.energy += 5;
    this.tired = false;
  }

  sleep()
  {
    this.energy += 10;
    this.tired = false;
  }
  showEnergy()
  {
      return this.energy;
  }
}

class Tigers extends Animals
{
    constructor()
    {
        super();
        tigerCount++;
    }
    sleep()
    {
        this.energy += 5;
        this.tired = false;
    }
    makeASound()
    {
        super.makeASound();
        console.log("Meow... oops Roarrrr");
    }
}
class Monkeys extends Animals
{
    constructor()
    {
        super();
        monkeyCount++;
    }
    eatFood()
    {
        this.energy += 2;
        this.tired = false;
    }
    makeASound()
    {
        this.energy -= 4;
        console.log("Im not gonna say ooo oo aaaaaa aaa");
    }
    play()
    {
        if (this.energy > 8)
        {
            console.log("Oooo Oooo Oooo");
            this.energy -= 8;
        }
        else  
        {
            console.log("Monkeys get tired too, this monkey is very tired");
            this.tired = true;
        }
    }
}

class Snakes extends Animals
{
    constructor()
    {
        super();
        snakeCount++;
        console.log("If you dont like snakes, take this... hisssssss");
    }
    makeASound()
    {
        super.makeASounds();
        console.log("If you dont like snakes, take this... hisssssss");
    }
}



const soundOff = function()
{
  monkey1.makeASound();
  console.log("Monkey 1's energy: " + monkey1.showEnergy());
  tiger1.makeASound();
  console.log("Tiger 1's energy: " + tiger1.showEnergy());
  tiger2.makeASound();
  console.log("Tiger 2's energy: " + tiger2.showEnergy());
  tiger3.makeASound();
  console.log("Tiger 3's energy: " + tiger3.showEnergy());
}

const tiger1 = new Tigers();
const tiger2 = new Tigers();
const tiger3 = new Tigers();

tiger3.sleep();
console.log("Tiger3's energy: " + tiger3.showEnergy());
console.log("Number of Tigers: " + tigerCount);

const monkey1 = new Monkeys();
console.log("Number of Monkeys: " + monkeyCount);
monkey1.sleep();
while (!monkey1.tired)
    monkey1.play();

const snake1 = new Snakes();    
console.log("Number of Snakes: " + snakeCount);
soundOff();