public class ContactAndLeadSearch {
    public static List<List<sObject>> searchContactsAndLeads(String nameToSearch) {
        List<List<sObject>> results = [
            FIND :nameToSearch
            IN NAME FIELDS
            RETURNING Contact(Id, FirstName, LastName), Lead(Id, FirstName, LastName)
        ];
        return results;
    }
}