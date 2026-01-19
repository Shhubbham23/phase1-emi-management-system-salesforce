public with sharing class GenerateEmIController {

    @AuraEnabled
    public static void generateEmis(Id loanId) {
        Integer existingEmis = [SELECT COUNT() FROM EMI__c WHERE Loan__c = :loanId];
        if (existingEmis > 0) {
            throw new AuraHandledException('EMIs already generated for this Loan');
        }

        Loan__c loan = [
            SELECT Id, Loan_Amount__c, Tenure_Months__c
            FROM Loan__c
            WHERE Id = :loanId
        ];

        Decimal emiAmount = loan.Loan_Amount__c / loan.Tenure_Months__c;
        Date startDate = Date.today().addMonths(1);

        List<EMI__c> emis = new List<EMI__c>();

        for (Integer i = 0; i < loan.Tenure_Months__c; i++) {
            emis.add(new EMI__c(
                Loan__c = loan.Id,
                EMI_Amount__c = emiAmount,
                Due_Date__c = startDate.addMonths(i),
                EMI_Status__c = 'Pending'
            ));
        }

        insert emis;
    }

    // 🔑 REQUIRED for auto refresh
    @AuraEnabled(cacheable=true)
    public static List<EMI__c> getEmis(Id loanId) {
        return [
            SELECT Id, EMI_Amount__c, Due_Date__c, EMI_Status__c
            FROM EMI__c
            WHERE Loan__c = :loanId
            ORDER BY Due_Date__c
        ];
    }
}