class Animal {
    makeSound(): void {
      console.log("Make some sound");
  };
}
  
  class Dog extends Animal {
    makeSound(): void {
      console.log("Bark bark ");
    }
  };
  
  class Cat extends Animal {
    makeSound(): void {
        console.log('Mew-mew')
    }
  
  }
  
  const cat = new Cat()
  const dog = new Dog()
  const animal = new Animal()
  cat.makeSound()
  dog.makeSound()
  animal.makeSound()

//   ця конструкція дозволяє переписувати метод в залезності від контексту який вам потрібен 
//   Інтерфейс 
//   інтерфейс - це шаблон для классу якщо ви будет створювати
//    якись класси на основі інтерфейсу 
//    то він вам отразу буде допомагати 
//    і казати шо для кожного классу повинні бути реалізовані ті чі інші методи чи властивості 

  interface Shape {
    area():number
  }

   class Rectangle implements Shape {
    width: number
    height : number 
    constructor(width: number,height : number ){
        this.width = width
        this.height = height

    }

    area () {
        return this.width * this.height
    }

    getName() {
        const name = 'My name is Rectangle'
        console.log(name)
        // тут в середині методів  можно використати переменную але в классах  
        // т неможно  замість змінних у нас є властивості 
       // this.width = width
        //this.height = height
    }
   }

   const rectangle = new Rectangle(10,15)
   rectangle.area()

   class Human { 
    weight: number
    height:number
    sex: string
   readonly eyeColor: string
   readonly hairColor: string
    age: number

    constructor(    weight: number,
        height:number,
        sex: string,
        eyeColor: string,
        hairColor: string,
        age: number,){
            this.weight = weight
            this.height = height
            this.sex = sex
            this.eyeColor = eyeColor
            this.hairColor = hairColor
            this.age = age

    }

    go() {
        console.log('I can go')

    }

    run (){
        console.log('I can run')
    }
    take (){
        console.log('I can take')

    }
    sit (){
        console.log('I can sit')

    }

   }

   const myInfoAsHuman = new Human(48,175,'girl','brown','blond',25)
   myInfoAsHuman.run()

//    класс може мати лише конструктор методи -  гетори або сетери або протепті 
//    переменние могуть бути поза класами або обьектами в середині классів або обьектів можуть існувати тільки всередині классів або методів 
//    рідонлі не дозволяє змінювати властивості 
//    якщо у вас в проперті є ридонлі то ви не можете його переписувати 
