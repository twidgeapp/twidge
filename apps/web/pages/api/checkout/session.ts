import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-08-01',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // get users location
    const location = req.headers['cf-ipcountry'] as string;
    console.log(req.headers);
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        allow_promotion_codes: true,
        billing_address_collection: 'auto',
        line_items: [
            {
                price: 'price_1LzH3ISEdzHbt4DeZZXp4ATK',
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
    });

    return res.status(200).json({ sessionId: session.id });
};
