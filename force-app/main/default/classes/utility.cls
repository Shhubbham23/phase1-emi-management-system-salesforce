public class utility {
    public void my_method(Integer num1,Integer num2){
        system.debug('Inside my method');
        system.debug(num1);
        system.debug(num2);
        integer sum = num1+num2;
        system.debug(sum);
        
        List<Account> accList = [select id,name from Account limit 10];
        system.debug(accList);
        
        for(integer i=0;i<=accList.size();i++){
            system.debug(accList[i]);
        }
         List<Account> newaccList = [select id,name,expense__c from Account where expense__c>500];
         List<string> nameList = new list<string>();
         map<id,string> idvsString = new map<id,string>();
        map<id,Account> idvsAccount = new map<id,Account>();
        
        for(Account acc: accList){
            system.debug(acc);
            system.debug(acc.name);
            nameList.add(acc.name);
            idvsString.put(acc.id,acc.name);
            idvsAccount.put(acc.id,acc);	
    }
 }
}