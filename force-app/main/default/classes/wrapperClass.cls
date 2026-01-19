public class wrapperClass {
    public outputWrapper performOutput(integer num1, integer num2){
        outputWrapper output = new outputWrapper();
        output.add = num1+num2;
        output.sub = num1-num2;
        output.mul = num1*num2;
        output.div = num1/num2;
        return output;
    }
    
    
     public static outputWrapper getAccountDetails(id accId){
         outputWrapper output = new outputWrapper();
        list<contact> conList = [select id, name from contact where accountId = :accId];
         if(!conList.isEmpty()){
              output.conList = conList;
             output.size = conList.size();
         }         
        return output;
    }
    
   // public static outputWrapper performOperations(inputWrapper input){
   //     outputWrapper output = new outputWrapper();
   //     output.add = input.num1+input.num2;
   //     output.sub = input.num1-input.num2;
   //     output.mul = input.num1*input.num2;
   //     output.div = input.num1/input.num2;
   //     return output;
  //  }
    
    
    public static void createAccount(AccountDetailWrapper details){
        account acc = new account();
        acc.name = details.name;
        acc.accountNumber = details.accNumber;
        acc.Active__c = details.isActive;
        insert acc;
    }
    
    
    public static list<account> getAccount(list<AccountDetailWrapper> detailsWrap){
        list<account> accList = new list<account>();
        for(AccountDetailWrapper accWrap : detailsWrap){
            account acc = new account(name = accWrap.name, accountNumber = accWrap.accNumber, Active__c = accWrap.isActive);
            accList.add(acc);
        }
        if(!accList.isEmpty()){
            insert accList;
        }
        return accList;
    }
    
    
    //public static List<AccountDetailWrapper> getAccountDetails(List<string> accNames){
    //    list<account> accList = [select name, accountnumber, active__c from account where name IN : accNames];
    //    list<AccountDetailWrapper> adList = new list<AccountDetailWrapper>();
    //    for(account acc: accList){
    //        AccountDetailWrapper detail = new AccountDetailWrapper();
    //    detail.accNumber = acc.accountNumber;
     //   detail.isActive = acc.active__c;
    //    detail.name = acc.name;
    //    adList.add(detail);
    //        }
  //  return adList;
  //  }
    
    
    public static List<InnerWrapperExample> getAccountDetails(List<string> accNames){
        list<account> accList = [select name, accountnumber, active__c from account where name IN : accNames];
        list<InnerWrapperExample> adList = new list<InnerWrapperExample>();
        for(account acc: accList){
            InnerWrapperExample detail = new InnerWrapperExample();
        detail.accNumber = acc.accountNumber;
        detail.isActive = acc.active__c;
        detail.name = acc.name;
        adList.add(detail);
            }
    return adList;
    }
    
    
    public class InnerWrapperExample{
        public string name;
    	public string accNumber;
    	public string isActive;
    }
    
    public class inputWrapper{
        public id accId;
        public integer conCount;
    }
    
    public static void createContact(list<inputWrapper> input){
        list<contact> conList = new list<contact>();
        for(inputWrapper data:input){
            for(integer i=1;i<=data.conCount;i++){
                Contact con = new contact();
                con.lastName = 'SRK'+i;
                con.accountId = data.accid;
                conlist.add(con);
            }
        }
        insert conlist;
    }
    
    
    public class accountDetails{
        public id accId;	
        public list<contactDetails> contactInfo;
    }
    
    public class contactDetails{
        public string name;
        public id conId;
    }
    
    public static void getAccountsInfo(){
        list<account> accList = [select id, name,(select id, name from contacts) from account];
        list<accountDetails> accDetailList = new list<accountDetails>();
        
        for(Account acc : accList){
        accountDetails accDetail = new accountDetails();
        accDetail.accId = acc.Id;
        list<contactDetails> conDetailList = new list<contactDetails>();
        for(contact con:acc.contacts){
            contactDetails conDetail = new contactDetails();
            conDetail.name = con.name;
            conDetail.conid = con.Id;
            conDetailList.add(conDetail);
        }
        accDetail.contactInfo = conDetailList;
        accDetailList.add(accDetail);
        system.debug('accDetailsList -- '+accDetailList);
    }
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}