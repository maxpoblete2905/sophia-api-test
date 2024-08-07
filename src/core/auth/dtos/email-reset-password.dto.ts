import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class EmailResetPasswordDto {
  @ApiProperty({
    description:
      'The email address to which the password reset link will be sent',
    example: 'user@example.com',
  })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;
}
