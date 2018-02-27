<template>
  <div id="sample">
    <div id="myDiagramDiv" style="border: solid 1px black; width: 100%; height: 400px;"></div>
  </div>
</template>
<script>
  export default {
    props: {
      arr: Array
    },
    data () {
      return {
        x_ran: 200,
        y_ran: 100,
        diagram: null
      }
    },
    watch: {
      arr: function (reArr) {
        this._load()
      }
    },
    mounted () {
      var F = this.$Flowchart.GraphObject.make  // for conciseness in defining templates

      this.diagram = F(this.$Flowchart.Diagram, 'myDiagramDiv',
        { initialContentAlignment: this.$Flowchart.Spot.Center,
          'toolManager.mouseWheelBehavior': this.$Flowchart.ToolManager.WheelZoom
        })

      this.diagram.nodeTemplate =
        F(this.$Flowchart.Node, 'Auto',
          new this.$Flowchart.Binding('location', 'loc', this.$Flowchart.Point.parse).makeTwoWay(this.$Flowchart.Point.stringify),
          // define the node's outer shape, which will surround the TextBlock
          F(this.$Flowchart.Shape, 'RoundedRectangle',
            { parameter1: 8,
              fill: F(this.$Flowchart.Brush,
                'Linear', {
                  0: 'rgb(254, 201, 0)',
                  1: 'rgb(254, 162, 0)'
                }),
              stroke: null,
              portId: '',
              cursor: 'pointer'
            }),
          F(this.$Flowchart.TextBlock, {
            font: '11pt helvetica, arial, sans-serif',
            editable: false
          },
          new this.$Flowchart.Binding('text').makeTwoWay())
        )

      // unlike the normal selection Adornment, this one includes a Button
      this.diagram.nodeTemplate.selectionAdornmentTemplate =
        F(this.$Flowchart.Adornment, 'Spot',
          F(this.$Flowchart.Panel, 'Auto',
            F(this.$Flowchart.Shape, {
              fill: null,
              stroke: 'blue',
              strokeWidth: 0
            }),
            F(this.$Flowchart.Placeholder)
          )
        )

      // replace the default Link template in the linkTemplateMap
      this.diagram.linkTemplate =
        F(this.$Flowchart.Link,  // the whole link panel
          {
            curve: this.$Flowchart.Link.None,
            adjusting: this.$Flowchart.Link.Stretch,
            reshapable: false,
            relinkableFrom: false,
            relinkableTo: false,
            toShortLength: 3
          },
          new this.$Flowchart.Binding('points').makeTwoWay(),
          new this.$Flowchart.Binding('curviness'),

          // for line design
          F(this.$Flowchart.Shape,  // the link shape
            { strokeWidth: 2 }),

          // for line arrow head
          F(this.$Flowchart.Shape,  // the arrowhead
            {
              toArrow: 'opentriangle', // if standard will be set arrow
              stroke: null
            }),

          // for line message box design
          F(this.$Flowchart.Panel, 'Auto',
            F(this.$Flowchart.Shape,  // the label background, which becomes transparent around the edges
              {
                fill: F(this.$Flowchart.Brush, 'Radial', {
                  0: 'rgb(255, 255, 255)',
                  0.7: 'rgb(255, 255, 255)',
                  1: 'rgba(255, 255, 255, 0)'
                }),
                stroke: null
              }),
            // for line message
            F(this.$Flowchart.TextBlock, 'transition',  // the label text
              {
                textAlign: 'center',
                font: '9pt helvetica, arial, sans-serif',
                margin: 5,
                editable: false  // enable in-place editing
              },
              // editing the text automatically updates the model data
              new this.$Flowchart.Binding('text').makeTwoWay())
          )
        )

      this._load()
    },
    methods: {
      reCreate (array) {
        var nodeDtArr = []
        var linkDtArr = []
        var xRan = this.x_ran
        var yRan = this.y_ran

        array.map((item) => {
          if (!nodeDtArr.find((it) => { return it.text === item.rcid })) {
            nodeDtArr.push({text: item.rcid})
          }

          if (!nodeDtArr.find((it) => { return it.text === item.sdid })) {
            nodeDtArr.push({text: item.sdid})
          }
        })

        // set id
        nodeDtArr.sort((a, b) => { return a.text < b.text }).map((it, d) => { it.id = d })

        // set values
        array.map((it, d, ar) => {
          var locX = (it.fid.toString().charAt(0) - 1) * xRan
          var fromId = nodeDtArr.find((ita) => { return ita.text === it.sdid }).id
          var toId = nodeDtArr.find((ita) => { return ita.text === it.rcid }).id

          nodeDtArr.map((ita) => { if (ita.text === it.sdid) { ita.locX = locX } })
          linkDtArr.push({from: fromId, to: toId, text: (it.count).toString()})
        })

        var nodelv = []
        var locXlast = Math.max(...nodeDtArr.map((it) => { return it.locX ? it.locX : 0 }))

        // set locationX on last node
        nodeDtArr.map((it) => { if (!it.locX && it.locX !== 0) { it.locX = locXlast + xRan } })

        nodeDtArr.map((it) => { if (!nodelv.find((v) => { return v === it.locX })) { nodelv.push(it.locX) } })

        nodelv.map((v) => {
          nodeDtArr.filter((it) => { return it.locX === v })
          .map((it, i) => {
            var dx = nodeDtArr.filter((it) => { return it.locX === v }).length
            it.locY = dx % 2 === 0 ? (parseInt(dx / 2) - i) * yRan - 50 : (parseInt(dx / 2) - i) * yRan
          })
        })

        nodeDtArr.map((it) => { it.loc = it.locX + ' ' + it.locY })

        return {nodeKeyProperty: 'id', nodeDataArray: nodeDtArr, linkDataArray: linkDtArr}
      },
      _load () {
        this.diagram.model = this.$Flowchart.Model.fromJson(this.reCreate(this.arr))
      }
    }
  }
</script>
<style>

</style>
