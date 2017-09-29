Example with vue-js-modal

    <div>
        <modal name="hello-world">
            <example text="Hello World Modal"></example>
        </modal>
        <button class="green"
                @click="$modal.show('hello-world')">
        Demo: Dog Profile photo
        </button>
    </div>

Example with v-media-query


    <example :text="colorDemo" v-show="$mq.resize && $mq.above('width', 1200)"></example>

