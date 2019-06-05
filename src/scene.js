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
    ViroText,
    ViroARTrackingTargets,
    ViroARImageMarker
} from 'react-viro';

class Scene extends React.Component {
    render() {
        return (
            <ViroARScene>
                <ViroARImageMarker target="poster">
                    <ViroNode
                        // position={[0, 0, 0]}
                        rotation={[-90, 0, 0]}
                        // scale={[2.0, 2.0, 2.0]}
                    >

                        <ViroText
                            text="Hello World"
                            textAlign="left"
                            textAlignVertical="top"                            
                            textClipMode="clipToBounds"
                            color="green"
                            width={2}
                            height={2}
                            style={{ fontFamily: "Arial", fontSize: 20, fontWeight: '400', fontStyle: "italic" }}
                            position={[0, 0, -.5]}
                        />

                        <ViroFlexView
                            style={{ flexDirection: 'row', padding: .1 }}
                            width={2}
                            height={1}
                            position={[0, 0, 0]}
                            rotation={[0, 0, 0]}
                        >

                            <ViroImage
                                style={{ flex: .5 }}
                                source={{ uri: "https://i.kym-cdn.com/entries/icons/mobile/000/005/608/nyan-cat-01-625x450.jpg" }}
                            />

                        {/* <ViroVideo
                                style={{ flex: .5 }}
                                source={require('./res/NyanCat.mp4')}
                                loop={true}
                                position={[0, 2, -5]}
                                scale={[2, 2, 0]}
                            /> */}
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