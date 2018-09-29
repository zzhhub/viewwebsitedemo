<template>
    <div>
        <Button type="primary" @click="modal1 = true">Display dialog box</Button>
        <Modal
                v-model="modal1"
                title="Common Modal dialog box title"
                @on-ok="ok"
                @on-cancel="cancel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>

        <Button @click="modal2 = true">Custom header and footer</Button>
        <Modal v-model="modal2" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>Delete confirmation</span>
            </p>
            <div style="text-align:center">
                <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
                <p>Will you delete it?</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>
            </div>
        </Modal>

        <Button @click="modal3 = true">No title bar</Button>
        <Modal v-model="modal3">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>

        <Button @click="modal4 = true">Internationalization</Button>
        <Modal
                v-model="modal4"
                title="Modal Title"
                ok-text="OK"
                cancel-text="Cancel">
            <p>Something...</p>
            <p>Something...</p>
            <p>Something...</p>
        </Modal>

        <Button @click="modal5 = true">Set the width</Button>
        <Modal
                v-model="modal5"
                title="Custom width"
                width="300">
            <p>Customize width, unit px, default 520px.</p>
            <p>The width of the dialog box is responsive, and the width becomes <code>auto</code> when the screen size is less than 768px.</p>
        </Modal>

        <Button type="primary" @click="modal6 = true">Display dialog box</Button>
        <Modal
                v-model="modal6"
                title="Title"
                :loading="loading"
                @on-ok="asyncOK">
            <p>After you click ok, the dialog box will close in 2 seconds.</p>
        </Modal>
        <p>
            Name: {{ value }}
        </p>
        <p>
            <Button @click="handleRender">Custom content</Button>
        </p>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                modal1: false,
                modal2: false,
                modal_loading: false,
                modal3: false,
                modal4: false,
                modal5: false,
                modal6: false,
                loading: false,
                value: ''
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('Successfully delete');
                }, 2000);
            },
            asyncOK () {
                this.loading = true;
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            },
            handleRender () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please enter your name...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    }
                })
            }
        }
    }
</script>

<style>

</style>
