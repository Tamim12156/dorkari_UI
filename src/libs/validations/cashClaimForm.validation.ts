/* eslint-disable indent */
import { initialErrors, initialValues } from '@components/organisms';
import { formatValidatorKey } from '@utils/helpers';

export const cashClaimFormValidations = (values: Partial<typeof initialValues>): Partial<typeof initialErrors> => {
	const errors: Partial<typeof initialErrors> = {};

	if (values && Object.keys(values).length > 0) {
		for (const [key, value] of Object.entries(values)) {
			if (key in initialErrors) {
				if (!value) {
					errors[key] = `${formatValidatorKey(key)} is required`;
				} else {
					errors[key] = null;
				}
			}
		}
	}

	return errors;
};
