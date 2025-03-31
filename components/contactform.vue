<template>
    <div class="bg-gradient-to-r from-primary via-neutral to-primary p-8 rounded-lg shadow-lg max-w-lg mx-auto">
        <form
            action="https://gmail.us20.list-manage.com/subscribe/post?u=9848c570f48b92b911e6a7195&amp;id=0578cfc38c&amp;f_id=00b759eef0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="space-y-6"
            target="_self"
            novalidate="true"
        >
            <h2 class="text-3xl font-bold text-center text-base-content">Subscribe</h2>
            <div class="text-center text-sm text-base-content">
                <span class="text-accent">*</span> indicates required
            </div>
            <div class="space-y-4">
                <div class="flex flex-col">
                    <label for="mce-EMAIL" class="text-base-content font-semibold">Email Address <span class="text-accent">*</span></label>
                    <input
                        type="email"
                        name="EMAIL"
                        class="input input-bordered w-full"
                        id="mce-EMAIL"
                        required
                        value=""
                    />
                </div>
                <div class="flex flex-col">
                    <label for="mce-FNAME" class="text-base-content font-semibold">First Name</label>
                    <input
                        type="text"
                        name="FNAME"
                        class="input input-bordered w-full"
                        id="mce-FNAME"
                        value=""
                    />
                </div>
            </div>
            <div class="bg-base-200 p-4 rounded-lg">
                <label class="text-base-content font-semibold">Marketing Permissions</label>
                <p class="text-sm text-base-content">
                    Please select all the ways you would like to hear from Alternate Era:
                </p>
                <fieldset class="space-y-2">
                    <label class="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="gdpr_38151"
                            name="gdpr[38151]"
                            class="checkbox"
                            value="Y"
                        />
                        <span class="text-base-content">Email</span>
                    </label>
                </fieldset>
                <p class="text-xs text-base-content mt-2">
                    You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.
                </p>
            </div>
            <div class="text-xs text-base-content">
                We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/terms" class="text-accent underline">Learn more</a> about Mailchimp's privacy practices.
            </div>
            <div class="flex justify-center">
                <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="btn btn-primary w-full"
                    value="Subscribe"
                />
            </div>
        </form>
    </div>
</template>
