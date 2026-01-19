public class My_New_School {
    
	public string student_name;
    public integer rollnumber;
    public string city;
    public boolean is_present;
    
    public My_New_School(){
        student_name='om';
        rollnumber=1;
        city='Nashik';
        is_present=true;
    }
    
    public void printdata(){
        system.debug('i am inside the school');
    }
    
     public void print(string data){
        system.debug('data is ---> '+data);
    }
    
    public integer addition(integer num1, integer num2){
        integer result;
        result=num1+num2;
        return result;
    }
    
    public integer add(integer numb1, integer numb2){
        integer output;
        output = numb1+numb2;
        system.debug('output is '+output);
        return output;
    }
    
    public void checkNumber(integer num){
        if(num>0){
            system.debug('number is positive');
        }
        else{
            system.debug('number is negative');
        }
    }
    
    public void printNum(integer num){
        for(integer i=1;i<=num;i++){
            system.debug(i);
        }
    }
    
    public void printAccData(){
        account acc;
        acc=[select id,name from account limit 1];
        system.debug(acc);
    }
    
}