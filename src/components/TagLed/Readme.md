```jsx
new Vue({
  data() {
    return {
      allowRemoveAll: true,
      showTagWrapper: true,
      isReadOnly: false,
      enableLink: true,
      sampleRoot: 'candy',
      sampleName: 'Necco Wafer',
      tags: [],
      defaultTags: [
        {
          root: 'plumbus',
          rootId: '42',
          name: 'Flarm',
          link: './plumbus-42.html'
        },
        {
          root: 'schmekel',
          name: 25
        }
      ],
      jsonDescriptor: ''
    }
  },
  mounted() {
    this.tags = JSON.parse(JSON.stringify(this.defaultTags))
    this.$nextTick(function() {
      this.updateDescriptor()
    })
  },
  methods: {
    updateDescriptor() {
      this.jsonDescriptor = JSON.stringify(
        {
          tags: this.$refs.tagLetExample.$props.tags,
          allowRemoveAll: this.$refs.tagLetExample.$props
            .allowRemoveAll,
          showTagWrapper: this.$refs.tagLetExample.$props
            .showTagWrapper,
          readOnly: this.$refs.tagLetExample.$props.readOnly
        },
        null,
        '  '
      )
    },
    resetComponent() {
      this.tags = JSON.parse(JSON.stringify(this.defaultTags))
      this.allowRemoveAll = true
      this.showTagWrapper = true
      this.isReadOnly = false
      this.enableLink = true
      this.sampleRoot = 'candy'
      this.sampleName = 'Necco Wafer'

      this.$nextTick(function() {
        this.updateDescriptor()
      })
    },
    addTag() {
      this.tags.push({ root: this.sampleRoot, name: this.sampleName })
      this.updateDescriptor()
    },
    removed() {
      this.updateDescriptor()
    }
  },
  template: `
    <div>
      <div class="form-group form-inline">
        <input class="form-control" type="checkbox" v-model="allowRemoveAll" @change="updateDescriptor">
        <label>&nbsp;Allow Remove All?</label>
        <br />
        <input class="form-control" type="checkbox" v-model="showTagWrapper" @change="updateDescriptor">
        <label>&nbsp;Show Tag Wrapper?</label>
        <br />
        <input class="form-control" type="checkbox" v-model="isReadOnly" @change="updateDescriptor">
        <label>&nbsp;Read Only?</label>
        <br />
        <input class="form-control" type="checkbox" v-model="enableLink" @change="updateDescriptor">
        <label>&nbsp;Enable Link?</label>
        <br />
        <div class="form-group form-inline">
            <label>Root:</label><input type="text" v-model="sampleRoot">
            <label>Name:</label><input type="text" v-model="sampleName">
            <button type="button" class="btn-xs btn-primary" @click="addTag">Add Tag</button>
        </div>
        <br />
        <br />
        <button type="button" class="btn-xs btn-primary" @click="resetComponent">Reset Component</button>
      </div>

      <hr />

      <tag-let ref="tagLetExample"
        :tags="tags"
        :enableLink="enableLink"
        :readOnly="isReadOnly"
        :allowRemoveAll="allowRemoveAll"
        :showTagWrapper="showTagWrapper"
        @onRemove="removed"
        @onAllRemove="removed"
        >
      </tag-let>

      <hr />

      <p>Current TagLet Instance Model. <strong>Note:</strong> only the root and name properties are needed for tag display. The link property is used when the enableLink flag is active. Addtional data properties are optional depending on use case.</p>
      <code style="white-space: pre-wrap;" class="show">{{ jsonDescriptor }}</code>
    </div>
  `
})
```
