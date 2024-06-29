export class CounterService{
    AtoI = 0;
    ItoA = 0;

    incrementAtoI(){
        this.AtoI++;
        console.log("Active to Inactive count : " + this.AtoI);
    }
    incrementItoA(){
        this.ItoA++;
        console.log("Inactive to Active count : " + this.ItoA);
    }
}