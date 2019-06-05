import React from 'react';
import {
    ViroARScene,
    ViroBox,
    ViroMaterials,
    ViroSphere,
    ViroImage,
    ViroVideo,
    ViroFlexView,
    ViroNode,
    Viro3DObject,
    ViroARTrackingTargets,
    ViroARImageMarker
} from 'react-viro';

class Scene extends React.Component {
    render() {
        return (
            <ViroARScene>
                <ViroARImageMarker target="poster">
                    <ViroNode
                        position={[2.0, 5.0, -2.0]}
                        rotation={[-90, 0, 0]}
                        scale={[2.0, 2.0, 2.0]}
                    >

                        <ViroFlexView
                            style={{ flexDirection: 'row', padding: 10 }}
                            width={1}
                            height={1}
                        >
                            <ViroFlexView style={{ flex: 2 }}>

                                <ViroImage
                                    position={[0, -.5, -1]}
                                    height={2}
                                    width={2}
                                    source={{ uri: "https://i.kym-cdn.com/entries/icons/mobile/000/005/608/nyan-cat-01-625x450.jpg" }}
                                />
                            </ViroFlexView>

                            <ViroFlexView style={{ flex: 2 }}>

                                <ViroVideo
                                    source={require('./res/NyanCat.mp4')}
                                    loop={true}
                                    position={[0, 2, -5]}
                                    scale={[2, 2, 0]}
                                />
                            </ViroFlexView>
                        </ViroFlexView>
                        {/* 
                        <Viro3DObject source={require('./res/blackpanther/object_bpanther_anim.vrx')}
                            resources={[
                                require('./res/blackpanther/object_bpanther_Base_Color.png'),
                                require('./res/blackpanther/object_bpanther_Metallic.png'),
                                require('./res/blackpanther/object_bpanther_Mixed_AO.png'),
                                require('./res/blackpanther/object_bpanther_Normal_OpenGL.png'),
                                require('./res/blackpanther/object_bpanther_Roughness.png')
                            ]}
                            position={[0.0, 0.0, -10]}
                            scale={[0.1, 0.1, 0.1]}
                            type="VRX"
                        // animation={{
                        //     name: 'Take 001',
                        //     run: true,
                        //     loop: true,
                        //     delay: 1000
                        // }}
                        /> */}
                    </ViroNode>
                </ViroARImageMarker>

                <ViroBox
                    position={[0, -.5, -1]}
                    materials={['grid']}
                    height={.3}
                    lenght={.3}
                    width={.3}
                />
                {/* <ViroSphere
                    heightSegmentCount={20}
                    widthSegmentCount={20}
                    radius={.5}
                    position={[0, 0, -2]}
                    materials={["grid"]}
                /> */}
            </ViroARScene>

        )
    }
}

ViroMaterials.createMaterials({
    grid: {
        diffuseTexture: require('./res/grid.jpg')
    }
})

ViroARTrackingTargets.createTargets({
    poster: {
        source: require('./res/blackpanther.jpg'),
        orientation: "Up",
        physicalWidth: 0.6 // real world width in meters
    }
})

module.exports = Scene