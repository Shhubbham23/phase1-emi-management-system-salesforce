public class NewAccountTriggerHandler {

    public static void handleBeforeUpadetActivities(List<Account> newRecords, Map<Id, Account> oldMap){
        for(Account accRecords : newRecords){
            if(accRecords.Industry == 'Agriculture' && accRecords.Type == 'Prospect'){
                if(oldMap.get(accRecords.Id).Ownership != accRecords.Ownership && accRecords.Ownership == 'Private'){
                    accRecords.addError('Ownership cannot be modified');
                }
            }
        }
    }
}