public class Calculator {
    public Integer value1 = 500;
    public Integer value2 = 350;
    
     public Integer add_value() {
        Integer sum = value1 + value2;
        System.debug('Addition of value1 + value2 = ' + sum);
        return sum; 
    }
    
    public Integer sub_value() {
        Integer sub = value1 - value2;
        System.debug('Subs of value1 - value2 = ' + sub);
        return sub; 
    }
    
    public Integer mul_value() {
        Integer mul = value1 * value2;
        System.debug('Mul of value1 * value2 = ' + mul);
        return mul; 
    }
    
    public integer div_value() {
        integer div = value1 / value2;
        System.debug('Div of value1 / value2 = ' + div);
        return div; 
    }
   
}