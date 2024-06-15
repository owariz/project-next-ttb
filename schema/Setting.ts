import mongoose, { Schema, Document, Model } from 'mongoose';

interface ISetting extends Document {
    website: {
        title: string,
        desc: string,
        logo: string,
        keywords: string,
        status: string,
        seo: {
            title: string,
            logo: string,
            meta: {
                url: string,
                image: string,
                desc: string,
            }
        },
        navbar: {
            title: string,
            logo: string,
            menu: {
                name: string,
                text: string,
                icon: string,
                href: string,
                type: string,
            }[]
        }
    },
    updatedAt: Date,
    createdAt: Date,
}

const SettingSchema: Schema = new Schema({
    website: {
        title: { type: String, required: true },
        desc: { type: String, required: false },
        logo: { type: String, required: false },
        keywords: { type: String, required: false },
        status: { type: String, required: true },
        seo: {
            title: { type: String, required: false },
            logo: { type: String, required: false },
            meta: {
                url: { type: String, required: false },
                image: { type: String, required: false },
                desc: { type: String, required: false },
            }
        },
        navbar: {
            title: { type: String, required: true },
            logo: { type: String, required: false },
            menu: [{
                name: { type: String, required: true },
                text: { type: String, required: true },
                icon: { type: String, required: false },
                href: { type: String, required: true },
                type: { type: String, required: true },
            }]
        }
    },
    updatedAt: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now },
});

const Setting: Model<ISetting> = mongoose.models.Setting || mongoose.model<ISetting>('Setting', SettingSchema);

export default Setting;