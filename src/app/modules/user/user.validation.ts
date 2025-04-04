import { z } from 'zod';

const userValidationSchema = z.object({

  password: z
    .string({invalid_type_error:'Password must be string'})
    .max(20, { message: 'Password can not be more then 20 characters' }).optional(),
 
  status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  isDeleted: z.boolean().optional().default(false),
});

export const UserValidation = {
  userValidationSchema,
};
