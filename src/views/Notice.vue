<template>
    <div>
        <p>With desc</p>
        <Button @click="info(false)">Info</Button>
        <Button @click="success(false)">Success</Button>
        <Button @click="warning(false)">Warning</Button>
        <Button @click="error(false)">Error</Button>
        <p>Only title</p>
        <Button @click="info(true)">Info</Button>
        <Button @click="success(true)">Success</Button>
        <Button @click="warning(true)">Warning</Button>
        <Button @click="error(true)">Error</Button>
        <Button type="primary" @click="renderFunc">Open notice</Button>
    </div>
</template>
<script>
    export default{
    data (){
        return {
        }
    },
    components:{

    },
    methods: {
        info (nodesc) {
            this.$Notice.info({
                title: 'Notification title',
                desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
            });
        },
        success (nodesc) {
            this.$Notice.success({
                title: 'Notification title',
                desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
            });
        },
        warning (nodesc) {
            this.$Notice.warning({
                title: 'Notification title',
                desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
            });
        },
        error (nodesc) {
            this.$Notice.error({
                title: 'Notification title',
                desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
            });
        },
        renderFunc () {
            this.$Notice.success({
                title: 'Notification title',
                desc: 'The desc will hide when you set render.',
                render: h => {
                return h('span', [
                    'This is created by ',
                    h('a', 'render'),
                    ' function'
                ])
            }
        });
    }
    }
    }
</script>
<style>

</style>