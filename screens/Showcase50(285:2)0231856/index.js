import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_285_6}>
        <Text style={styles.Text_285_6}>DAILY 050 - JOB LISTING</Text>
      </View>
      <View style={styles.View_285_7}>
        <Text style={styles.Text_285_7}>050</Text>
      </View>
      <View style={styles.View_287_35} />
      <View style={styles.View_285_251}>
        <View style={styles.View_285_66} />
        <View style={styles.View_285_82} />
        <View style={styles.View_285_113}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b599/a10c/98325eb09fca00fe112a56346d891d4f"
            }}
            style={styles.ImageBackground_285_87}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8757/90ea/32d61aefeb65fc35c2413646b56efb5d"
            }}
            style={styles.ImageBackground_285_92}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1f/e694/64aabb0774b87e7919de8e503484c8fd"
          }}
          style={styles.ImageBackground_287_34}
        />
        <View style={styles.View_285_65} />
        <View style={styles.View_285_77}>
          <Text style={styles.Text_285_77}>Find a job</Text>
        </View>
        <View style={styles.View_285_85}>
          <Text style={styles.Text_285_85}>Land your dream job.</Text>
        </View>
        <View style={styles.View_285_159}>
          <Text style={styles.Text_285_159}>Recommend for you</Text>
        </View>
        <View style={styles.View_285_86}>
          <Text style={styles.Text_285_86}>
            The perfect job for you is just a click away, you are at the right
            place to find the life changing opportunity
          </Text>
        </View>
        <View style={styles.View_285_84}>
          <Text style={styles.Text_285_84}>JOBCRATE</Text>
        </View>
        <View style={styles.View_285_78}>
          <Text style={styles.Text_285_78}>Pricing</Text>
        </View>
        <View style={styles.View_285_79}>
          <Text style={styles.Text_285_79}>Blog</Text>
        </View>
        <View style={styles.View_285_80}>
          <Text style={styles.Text_285_80}>Post a job</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54f/e04f/902b3746711e4fe914ba20ce3185a3b5"
          }}
          style={styles.ImageBackground_285_83}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ade/95d3/e919e39a6ea47b5f8278cfedfb827c06"
          }}
          style={styles.ImageBackground_285_121}
        />
        <View style={styles.View_285_138}>
          <View style={styles.View_285_139}>
            <View style={styles.View_285_140}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2d7/0f4e/a8e53ce9259e9525a1ba27e314581c01"
                }}
                style={styles.ImageBackground_285_141}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_285_164} />
        <View style={styles.View_285_165}>
          <Text style={styles.Text_285_165}>Start hiring</Text>
        </View>
        <View style={styles.View_285_166}>
          <Text style={styles.Text_285_166}>
            Find the best candidate and get the best of them in your inbox.
          </Text>
        </View>
        <View style={styles.View_285_169}>
          <View style={styles.View_285_167} />
          <View style={styles.View_285_168}>
            <Text style={styles.Text_285_168}>Post a job</Text>
          </View>
        </View>
        <View style={styles.View_285_196}>
          <View style={styles.View_285_170} />
          <View style={styles.View_285_191}>
            <Text style={styles.Text_285_191}>Dribbble</Text>
          </View>
          <View style={styles.View_285_193}>
            <Text style={styles.Text_285_193}>Montreal - 22 mins ago</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ed/21df/8298ed317f414f0b53e3310c1ac84229"
            }}
            style={styles.ImageBackground_285_194}
          />
          <View style={styles.View_285_192}>
            <Text style={styles.Text_285_192}>Senior UX Designer</Text>
          </View>
          <View style={styles.View_285_173}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae88/5941/846d0c4f9d5d60ee044e3c33ec122b12"
              }}
              style={styles.ImageBackground_285_174}
            />
          </View>
        </View>
        <View style={styles.View_285_197}>
          <View style={styles.View_285_198} />
          <View style={styles.View_285_199}>
            <Text style={styles.Text_285_199}>Microsoft</Text>
          </View>
          <View style={styles.View_285_200}>
            <Text style={styles.Text_285_200}>Kentucky - 1 hour ago</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ed/21df/8298ed317f414f0b53e3310c1ac84229"
            }}
            style={styles.ImageBackground_285_201}
          />
          <View style={styles.View_285_203}>
            <Text style={styles.Text_285_203}>Lead UI Engineer</Text>
          </View>
          <View style={styles.View_285_264}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e48/f5b7/7c6495132df7e7384cfc38619f32385d"
              }}
              style={styles.ImageBackground_285_265}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfc8/1790/c7afe66b69f23588d64cfce3faf2537d"
              }}
              style={styles.ImageBackground_285_266}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b690/0e54/65d252f9d6e2baf0acf115abc297b2b8"
              }}
              style={styles.ImageBackground_285_267}
            />
          </View>
        </View>
        <View style={styles.View_285_209}>
          <View style={styles.View_285_210} />
          <View style={styles.View_285_211}>
            <Text style={styles.Text_285_211}>Twitter</Text>
          </View>
          <View style={styles.View_285_212}>
            <Text style={styles.Text_285_212}>Vancouver - 1 hour ago</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ed/21df/8298ed317f414f0b53e3310c1ac84229"
            }}
            style={styles.ImageBackground_285_213}
          />
          <View style={styles.View_285_215}>
            <Text style={styles.Text_285_215}>Marketing Director</Text>
          </View>
          <View style={styles.View_285_216}>
            <View style={styles.View_285_217}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9102/985f/7ce490e8811b9c5a89d2d48e5ff6d716"
                }}
                style={styles.ImageBackground_285_218}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f30f/f979/d9a47465e2f2d25fb2cbea0992629ade"
                }}
                style={styles.ImageBackground_285_219}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_285_236}>
          <View style={styles.View_285_237} />
          <View style={styles.View_285_238}>
            <Text style={styles.Text_285_238}>Apple</Text>
          </View>
          <View style={styles.View_285_239}>
            <Text style={styles.Text_285_239}>Cupertino - 2 hour ago</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ed/21df/8298ed317f414f0b53e3310c1ac84229"
            }}
            style={styles.ImageBackground_285_240}
          />
          <View style={styles.View_285_242}>
            <Text style={styles.Text_285_242}>Junior Product designer</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a753/01bb/823e27357a0786c700c6fa3d6072b519"
            }}
            style={styles.ImageBackground_286_683}
          />
        </View>
        <View style={styles.View_287_7}>
          <View style={styles.View_287_8} />
          <View style={styles.View_287_9}>
            <Text style={styles.Text_287_9}>Spotify</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a43a/5eb8/1414f0db1f7b308609ec9bfcd9067a8f"
            }}
            style={styles.ImageBackground_287_16}
          />
          <View style={styles.View_287_10}>
            <Text style={styles.Text_287_10}>Tennessee - 2 hour ago</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ed/21df/8298ed317f414f0b53e3310c1ac84229"
            }}
            style={styles.ImageBackground_287_11}
          />
          <View style={styles.View_287_13}>
            <Text style={styles.Text_287_13}>UX Strategist</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_285_6: {
    width: wp("136%"),
    top: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6%")
  },
  Text_285_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_7: {
    width: wp("47.733333333333334%"),
    top: hp("168.71584699453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.33333333333334%")
  },
  Text_285_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 160,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_287_35: {
    width: wp("79.2%"),
    height: hp("120.62841530054644%"),
    top: hp("36.74863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    backgroundColor: "rgba(228, 233, 241, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_285_251: {
    width: wp("79.2%"),
    minWidth: wp("79.2%"),
    height: hp("120.62841530054644%"),
    minHeight: hp("120.62841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("36.74863387978142%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_285_66: {
    width: wp("79.2%"),
    height: hp("41.2568306010929%"),
    top: hp("-0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_285_82: {
    width: wp("79.2%"),
    height: hp("8.60655737704918%"),
    top: hp("-0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_285_113: {
    width: wp("32.06666666666666%"),
    minWidth: wp("32.06666666666666%"),
    height: hp("79.23497267759562%"),
    minHeight: hp("79.23497267759562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.6%"),
    top: hp("11.202185792349724%")
  },
  ImageBackground_285_87: {
    width: wp("32.06666666666666%"),
    minWidth: wp("32.06666666666666%"),
    height: hp("65.7103825136612%"),
    minHeight: hp("65.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.524590163934427%")
  },
  ImageBackground_285_92: {
    width: wp("8.933333333333334%"),
    height: hp("18.30601092896175%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.333333333333336%")
  },
  ImageBackground_287_34: {
    width: wp("0.6380703608194987%"),
    height: hp("0.7810935948064418%"),
    top: hp("28.82513661202185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.72859598795573%")
  },
  View_285_65: {
    width: wp("79.2%"),
    height: hp("79.6448087431694%"),
    top: hp("40.983606557377044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 233, 241, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_285_77: {
    width: wp("5.533333333333333%"),
    minWidth: wp("5.533333333333333%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.400000000000006%"),
    top: hp("2.5956284153005456%")
  },
  Text_285_77: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_85: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.61748633879781%")
  },
  Text_285_85: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_159: {
    width: wp("15.8%"),
    minWidth: wp("15.8%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.06666666666667%"),
    top: hp("45.62841530054645%")
  },
  Text_285_159: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_86: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("22.404371584699454%")
  },
  Text_285_86: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_84: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.0491803278688465%")
  },
  Text_285_84: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_78: {
    width: wp("5.466666666666667%"),
    minWidth: wp("5.466666666666667%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("2.5956284153005456%")
  },
  Text_285_78: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_79: {
    width: wp("5.466666666666667%"),
    minWidth: wp("5.466666666666667%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.13333333333333%"),
    top: hp("2.5956284153005456%")
  },
  Text_285_79: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_80: {
    width: wp("5.533333333333333%"),
    minWidth: wp("5.533333333333333%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.93333333333333%"),
    top: hp("2.5956284153005456%")
  },
  Text_285_80: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_285_83: {
    width: wp("79.2%"),
    minWidth: wp("79.2%"),
    height: hp("0.000014188286324815388%"),
    minHeight: hp("0.000014188286324815388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333329%")
  },
  ImageBackground_285_121: {
    width: wp("1.4000000000000001%"),
    height: hp("2.8688524590163933%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.53333333333333%")
  },
  View_285_138: {
    width: wp("1.4666666666666666%"),
    minWidth: wp("1.4666666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.99999999999999%"),
    top: hp("2.5956284153005456%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_285_139: {
    width: wp("1.312844467163086%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07691243489584565%")
  },
  View_285_140: {
    width: wp("1.312844467163086%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_285_141: {
    width: wp("1.312844467163086%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_285_164: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    height: hp("33.87978142076503%"),
    minHeight: hp("33.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("45.90163934426229%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_285_165: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7333333333333325%"),
    top: hp("49.72677595628416%")
  },
  Text_285_165: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_166: {
    width: wp("12.333333333333334%"),
    minWidth: wp("12.333333333333334%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7333333333333325%"),
    top: hp("57.5136612021858%")
  },
  Text_285_166: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_169: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7333333333333325%"),
    top: hp("70.62841530054645%")
  },
  View_285_167: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 107, 130, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_285_168: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%")
  },
  Text_285_168: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_196: {
    width: wp("41.53333333333333%"),
    minWidth: wp("41.53333333333333%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.06666666666667%"),
    top: hp("53.68852459016394%")
  },
  View_285_170: {
    width: wp("41.53333333333333%"),
    minWidth: wp("41.53333333333333%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_285_191: {
    width: wp("12.4%"),
    minWidth: wp("12.4%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2.4590163934426243%")
  },
  Text_285_191: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_193: {
    width: wp("12.466666666666667%"),
    minWidth: wp("12.466666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.133333333333333%"),
    top: hp("1.775956284152997%")
  },
  Text_285_193: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_285_194: {
    width: wp("0.8%"),
    height: hp("1.639344262295082%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666666%")
  },
  View_285_192: {
    width: wp("24.933333333333334%"),
    minWidth: wp("24.933333333333334%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5.601092896174862%")
  },
  Text_285_192: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_173: {
    width: wp("3.8%"),
    minWidth: wp("3.8%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.999999999999993%"),
    top: hp("2.4590163934426243%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_285_174: {
    width: wp("3.8%"),
    height: hp("7.7868581469593146%"),
    top: hp("0.00013653697862991976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_285_197: {
    width: wp("41.53333333333333%"),
    minWidth: wp("41.53333333333333%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.06666666666667%"),
    top: hp("68.5792349726776%")
  },
  View_285_198: {
    width: wp("41.53333333333333%"),
    minWidth: wp("41.53333333333333%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_285_199: {
    width: wp("12.4%"),
    minWidth: wp("12.4%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2.45901639344261%")
  },
  Text_285_199: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_200: {
    width: wp("12.466666666666667%"),
    minWidth: wp("12.466666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.133333333333333%"),
    top: hp("1.7759562841530112%")
  },
  Text_285_200: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_285_201: {
    width: wp("0.8%"),
    height: hp("1.639344262295082%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.266666666666666%")
  },
  View_285_203: {
    width: wp("24.933333333333334%"),
    minWidth: wp("24.933333333333334%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5.601092896174848%")
  },
  Text_285_203: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_264: {
    width: wp("3.8%"),
    minWidth: wp("3.8%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.999999999999993%"),
    top: hp("2.5956284153005384%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_285_265: {
    width: wp("3.8%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_285_266: {
    width: wp("3.34800771077474%"),
    height: hp("6.875880298718728%"),
    top: hp("0.9110049471829029%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4519917805989593%")
  },
  ImageBackground_285_267: {
    width: wp("2.896015930175781%"),
    height: hp("5.93445835217752%"),
    top: hp("0.9110049471829029%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4519917805989593%")
  },
  View_285_209: {
    width: wp("41.53333333333333%"),
    minWidth: wp("41.53333333333333%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.06666666666667%"),
    top: hp("83.46994535519126%")
  },
  View_285_210: {
    width: wp("41.53333333333333%"),
    minWidth: wp("41.53333333333333%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_285_211: {
    width: wp("12.4%"),
    minWidth: wp("12.4%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2.45901639344261%")
  },
  Text_285_211: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_212: {
    width: wp("12.466666666666667%"),
    minWidth: wp("12.466666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.133333333333333%"),
    top: hp("1.7759562841530112%")
  },
  Text_285_212: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_285_213: {
    width: wp("0.8%"),
    height: hp("1.639344262295082%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.733333333333334%")
  },
  View_285_215: {
    width: wp("24.933333333333334%"),
    minWidth: wp("24.933333333333334%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5.601092896174848%")
  },
  Text_285_215: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_216: {
    width: wp("3.8%"),
    minWidth: wp("3.8%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.999999999999993%"),
    top: hp("2.45901639344261%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_285_217: {
    width: wp("3.79996592203776%"),
    height: hp("7.786815935145311%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006713867188068434%")
  },
  ImageBackground_285_218: {
    width: wp("3.79996592203776%"),
    height: hp("7.786815935145311%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_285_219: {
    width: wp("2.213609568277995%"),
    height: hp("3.6863767384179957%"),
    top: hp("2.361668654478308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8501464843750028%")
  },
  View_285_236: {
    width: wp("41.53333333333333%"),
    minWidth: wp("41.53333333333333%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.06666666666667%"),
    top: hp("98.3606557377049%")
  },
  View_285_237: {
    width: wp("41.53333333333333%"),
    minWidth: wp("41.53333333333333%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_285_238: {
    width: wp("12.4%"),
    minWidth: wp("12.4%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2.4590163934426243%")
  },
  Text_285_238: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_285_239: {
    width: wp("12.466666666666667%"),
    minWidth: wp("12.466666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.133333333333333%"),
    top: hp("1.7759562841530396%")
  },
  Text_285_239: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_285_240: {
    width: wp("0.8%"),
    height: hp("1.639344262295082%"),
    top: hp("2.185792349726796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.666666666666657%")
  },
  View_285_242: {
    width: wp("24.933333333333334%"),
    minWidth: wp("24.933333333333334%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5.601092896174862%")
  },
  Text_285_242: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_286_683: {
    width: wp("3.8%"),
    height: hp("7.786885245901639%"),
    top: hp("2.5956284153005527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.999999999999993%")
  },
  View_287_7: {
    width: wp("41.53333333333333%"),
    minWidth: wp("41.53333333333333%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.06666666666667%"),
    top: hp("113.25136612021858%")
  },
  View_287_8: {
    width: wp("41.53333333333333%"),
    minWidth: wp("41.53333333333333%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_287_9: {
    width: wp("12.4%"),
    minWidth: wp("12.4%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2.4590163934426243%")
  },
  Text_287_9: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_287_16: {
    width: wp("3.8%"),
    height: hp("7.786885245901639%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.999999999999993%")
  },
  View_287_10: {
    width: wp("12.466666666666667%"),
    minWidth: wp("12.466666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.133333333333333%"),
    top: hp("1.7759562841530112%")
  },
  Text_287_10: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_287_11: {
    width: wp("0.8%"),
    height: hp("1.639344262295082%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.53333333333333%")
  },
  View_287_13: {
    width: wp("24.933333333333334%"),
    minWidth: wp("24.933333333333334%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5.601092896174862%")
  },
  Text_287_13: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 1500 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
