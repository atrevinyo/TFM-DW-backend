import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class User {

    _id?: string;

    @Prop({ required: true })
    nom: string;

    @Prop({ unique: true, required: true })
    email: string;

    @Prop({  minlength: 8, required: true })
    password: string;

}

export const UserSchema = SchemaFactory.createForClass( User );