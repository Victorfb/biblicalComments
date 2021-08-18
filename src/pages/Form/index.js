import { Formik } from 'formik';
import { TouchableOpacity, Keyboard } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import React, { useState, useRef } from 'react';
import LottieView from 'lottie-react-native';
import animationSuccess from '~/assets/animation_success.json';
import animationError from '~/assets/animation_error.json';
import Modal from '~/components/Modal';
import books from '~/utils/data';
import { validateForm } from '~/utils/validate';
import Api from '~/services/api';
import {
  Input,
  InputError,
  FormContainer,
  Container,
  Scroll,
  ImageColor,
  ImageTop,
  ButtonSend,
  Animation,
  TextAnimation,
} from './styles';
import { translate, I18nLocal } from '~/locales';

export default function Form() {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const lottieSuccess = useRef(null);
  const lottieError = useRef(null);

  async function sendMessage(values, { resetForm }) {
    setLoading(true);
    Keyboard.dismiss();
    await Api.post('/commentarys', values)
      .then(() => {
        resetForm({});
        setSendSuccess(true);
        setModalOpen(true);
        lottieSuccess.current.play(0, 158);
        setLoading(false);
        setTimeout(() => {
          setModalOpen(false);
        }, 2500);
      })
      .catch(() => {
        setModalOpen(true);
        lottieError.current.play(0, 40);
        setLoading(false);
        setTimeout(() => {
          setModalOpen(false);
        }, 2500);
      });
  }

  return (
    <>
      <Modal
        visible={modalOpen}
        close={() => setModalOpen(false)}
        onDismiss={() => setModalOpen(false)}
      >
        <Animation>
          <LottieView
            ref={(animation) => {
              lottieSuccess.current = animation;
              lottieError.current = animation;
            }}
            source={sendSuccess ? animationSuccess : animationError}
            autoPlay
            loop={false}
          />
          <TextAnimation>
            {sendSuccess
              ? translate(I18nLocal.SEND_SUCCESS)
              : translate(I18nLocal.SEND_ERROR)}
          </TextAnimation>
        </Animation>
      </Modal>
      <Formik
        initialValues={{
          name: '',
          book_bible: '',
          chapter: '',
          verse: '',
          comment: '',
        }}
        validate={validateForm}
        onSubmit={sendMessage}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
          submitCount,
        }) => (
          <Scroll>
            <Container>
              <ImageColor>
                <ImageTop />
              </ImageColor>
              <FormContainer>
                <Input
                  label={translate(I18nLocal.NAME)}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  error={
                    (errors.name && touched.name) ||
                    (submitCount > 0 && errors.name)
                  }
                />
                {((errors.name && touched.name) ||
                  (submitCount > 0 && errors.name)) && (
                  <InputError>{errors.name}</InputError>
                )}
                <TouchableOpacity onPress={() => setSearchDropdown(true)}>
                  <Input
                    editable={false}
                    label={translate(I18nLocal.BOOK)}
                    value={values.book_bible}
                    error={
                      (errors.book_bible && touched.book_bible) ||
                      (submitCount > 0 && errors.book_bible)
                    }
                  />
                </TouchableOpacity>
                {((errors.book_bible && touched.book_bible) ||
                  (submitCount > 0 && errors.book_bible)) && (
                  <InputError>{errors.book_bible}</InputError>
                )}
                <Modal
                  visible={searchDropdown}
                  close={() => setSearchDropdown(false)}
                  onDismiss={() => setSearchDropdown(false)}
                >
                  <MultiSelect
                    single
                    hideTags
                    hideDropdown
                    hideSubmitButton
                    noResultText={translate(I18nLocal.NO_BOOKS_FOUND)}
                    items={books}
                    uniqueKey="id"
                    onSelectedItemsChange={(itemList) => {
                      setSearchDropdown(false);
                      return setFieldValue(
                        'book_bible',
                        books[itemList - 1].name
                      );
                    }}
                    selectText={translate(I18nLocal.CHOOSE_A_BOOK)}
                    searchInputPlaceholderText={translate(
                      I18nLocal.SEARCH_FOR_BOOK
                    )}
                    displayKey="name"
                    styleDropdownMenu={{
                      height: 75,
                    }}
                    styleListContainer={{ height: 390, marginBottom: 20 }}
                    styleRowList={{
                      padding: 5,
                      marginTop: 3,
                      backgroundColor: '#1a288b',
                      borderColor: '#1a288b',
                      borderWidth: 1,
                      borderRadius: 5,
                    }}
                    itemTextColor="#fff"
                    selectedItemTextColor="#1a288b"
                    styleTextDropdownSelected="#1a288b"
                    styleTextDropdown={{
                      color: '#717171',
                      fontSize: 16,
                    }}
                    tagTextColor="#1a288b"
                    tagBorderColor="#717171"
                    textInputProps={{
                      style: {
                        fontSize: 16,
                      },
                      autoFocus: false,
                    }}
                    flatListProps={{ keyboardShouldPersistTaps: 'handled' }}
                  />
                </Modal>

                <Input
                  label={translate(I18nLocal.CHAPTER)}
                  onChangeText={handleChange('chapter')}
                  onBlur={handleBlur('chapter')}
                  value={values.chapter}
                  keyboardType="numeric"
                  maxLength={3}
                  error={
                    (errors.chapter && touched.chapter) ||
                    (submitCount > 0 && errors.chapter)
                  }
                />
                {((errors.chapter && touched.chapter) ||
                  (submitCount > 0 && errors.chapter)) && (
                  <InputError>{errors.chapter}</InputError>
                )}

                <Input
                  label={translate(I18nLocal.VERSE)}
                  onChangeText={handleChange('verse')}
                  onBlur={handleBlur('verse')}
                  value={values.verse}
                  maxLength={3}
                  keyboardType="numeric"
                  error={
                    (errors.verse && touched.verse) ||
                    (submitCount > 0 && errors.verse)
                  }
                />
                {((errors.verse && touched.verse) ||
                  (submitCount > 0 && errors.verse)) && (
                  <InputError>{errors.verse}</InputError>
                )}

                <Input
                  label={translate(I18nLocal.BLIBICAL_COMMENTARY)}
                  onChangeText={handleChange('comment')}
                  onBlur={handleBlur('comment')}
                  value={values.comment}
                  multiline
                  error={
                    (errors.comment && touched.comment) ||
                    (submitCount > 0 && errors.comment)
                  }
                />
                {((errors.comment && touched.comment) ||
                  (submitCount > 0 && errors.comment)) && (
                  <InputError>{errors.comment}</InputError>
                )}
              </FormContainer>
              <ButtonSend
                loading={loading}
                onPress={handleSubmit}
                title="Submit"
                icon="send"
                mode="contained"
              >
                {loading
                  ? translate(I18nLocal.SENDING)
                  : translate(I18nLocal.SEND)}
              </ButtonSend>
            </Container>
          </Scroll>
        )}
      </Formik>
    </>
  );
}
