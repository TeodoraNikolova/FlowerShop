import mongoose from 'mongoose'

const wizardSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    wizardItems: [
      {
        email: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Wizard = mongoose.model('Wizard', wizardSchema)

export default Wizard
