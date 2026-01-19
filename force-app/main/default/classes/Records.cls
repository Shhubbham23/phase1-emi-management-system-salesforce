public class Records {
    public void QueryAccounts(){
        List<Account> accountList = [SELECT Id, Name FROM Account LIMIT 10];
        for (Account acc : accountList) {
            System.debug('Account Id: ' + acc.Id + ', Account Name: ' + acc.Name);
        }
    }
}