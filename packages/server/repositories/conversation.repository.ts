// Implementation detail
const conversations = new Map<string, string>(); // To keep track of our cinversation

// Export public interface
export const conversationRepository = {
   getLastResponseId(conversationId: string) {
      return conversations.get(conversationId);
   },

   setLastResponseId(conversationId: string, responseId: string) {
      conversations.set(conversationId, responseId);
   },
};
