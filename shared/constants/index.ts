class Constants {
  readonly KAFKA_TOPICS = {
    AUTH: {
      SIGN_IN: 'sign-in',
      SIGN_UP: 'sign-up',
      VERIFY_TOKEN: 'verify-token',
      UPDATE_TOKEN: 'update-token',
    },
    ACTIVITY: {
      FIND_ALL: 'find-all-activity',
      CREATE: 'create-activity',
      UPDATE: 'update-activity',
      REMOVE: 'remove-activity',
    },
  };
}

export const CONSTANTS = new Constants();