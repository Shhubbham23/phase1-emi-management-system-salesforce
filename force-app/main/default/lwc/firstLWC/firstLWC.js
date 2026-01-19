import { LightningElement } from 'lwc';

export default class FirstLWC extends LightningElement {
    connectedCallback() {
        let a = 'Hello';
        console.log('value of a --' + a);
        console.log('value of a --' + typeof a);
        a = 7;
        console.log('value of a --' + a);
        console.log('value of a --' + typeof a);
        a = true;
        console.log('value of a --' + a);
        console.log('value of a --' + typeof a);
        let b;
        console.log('value of b --' + b);
        console.log('value of b --' + typeof b);
        let c = null;
        console.log('value of c --' + c);
        console.log('value of c --' + typeof c);

        if (a) {
            var d = 'hello';
        } else {
            var e = 'bye';
        }
        console.log('value of d --' + d);
        console.log('value of e --' + e);

        var arr = ['7', 9, 4, 2, 6, 5];
        console.log('value of arr --' + arr[3]);
        // arr[7] = 1;
        arr[2] = 8;
        console.log('value of arr --' + arr);

        for( let i=0; i<arr.length ;i++){
            console.log('inforloop --'+arr[i]);
            console.log('inforloop =='+typeof arr[i]);
        }

        arr.forEach((item)=> console.log('item --'+item));
        var obj ={
            name: 'rohit',
            phoneNo: [8888888888,9999999999],
            isFemale:false,
            address: {
                city: 'hyd',
                state: 'telangana'
            },
            27 : 'age'
        };
        console.log('name --'+obj.name);
        console.log('phoneNo --'+obj.phoneNo[1]);
        console.log('state --'+obj.address.state);
        console.log('27 --'+obj[27]);
        this.methodOne();
        this.methodTwo('hookkoo',3);
        let value = this.methodThree();
        console.log('value -- '+value);
        let result = this.methodFour(6,4);
        console.log('result -- '+result);
    }

    methodOne(){
        console.log('inside methodOne ');
    }
    methodTwo(a,b){
        console.log('inside methodTwo '+(a+b));
    }
    methodThree(){
       let str = 'Hello';
       return str;
    }
    methodFour(a,b){
        let c = a+b;
        return c;
     }
}