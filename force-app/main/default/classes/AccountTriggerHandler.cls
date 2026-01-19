public class AccountTriggerHandler {
    public void checkExpenseValue(List<account> accList){
        for(Account acc : accList){
            if(acc.expense__c<500){
                acc.addError('Expense can not be more than 500' );
            }
        }
    }
}