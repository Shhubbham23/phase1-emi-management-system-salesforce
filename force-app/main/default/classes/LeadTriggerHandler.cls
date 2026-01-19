public class LeadTriggerHandler {
    Public static void handleActivitiesAfterInsert(List<Lead> leadRecords){
        List<Task> taskListToInsert = new List<Task>();
        for(Lead leadRec : leadRecords){
            Task taskRecord = new Task();
            taskRecord.Priority = 'High';
            taskRecord.OwnerId = leadRec.OwnerId;
            taskRecord.Description = 'Follow up with the new lead';
            taskRecord.Status = 'Not Started';
            taskRecord.Subject = 'Follow Up';
            taskRecord.WhoId = leadRec.Id;
            taskListToInsert.add(taskRecord);
        }
        if(!taskListToInsert.isEmpty())
            insert taskListToInsert;
    }
    
    
    
    Public static void handleActivitiesAfterUpdate(){}
}