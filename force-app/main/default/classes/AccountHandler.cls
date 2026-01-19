public class AccountHandler {
    public static Account insertNewAccount(String accName) {
        try {
            Account acc = new Account(Name = accName);
            insert acc;
            return acc;
        } catch (DmlException e) {
            return null;
        }
    }
}