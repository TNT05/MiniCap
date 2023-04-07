/*import React from 'react';
import { shallow } from 'enzyme';
import UpdatePhoto from '../components/UpdatePhoto';

describe('UpdatePhoto', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UpdatePhoto />);
  });

  it('should render file input and button', () => {
    expect(wrapper.find('input[type="file"]')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should update state when file is selected', () => {
    const file = new File(['image'], 'test.png', { type: 'image/png' });
    const input = wrapper.find('input[type="file"]');
    input.simulate('change', { target: { files: [file] } });
    expect(wrapper.state().selectedFile).toEqual(file);
  });

  it('should update user document in Firestore and Redux store when file is uploaded', async () => {
    const updateProfilePictureMock = jest.fn();
    const user = { uid: '123', photoURL: 'oldUrl' };
    const props = {
      userId: '123',
      user: user,
      updateProfilePicture: updateProfilePictureMock,
    };
    const uploadBytesMock = jest.fn(() => Promise.resolve());
    const getDownloadURLMock = jest.fn(() => Promise.resolve('newUrl'));
    const updateDocMock = jest.fn(() => Promise.resolve());
    const listAllMock = jest.fn(() => Promise.resolve({ items: [] }));
    const refMock = jest.fn(() => {});
    const imagesFolderRefMock = { ref: refMock };
    const docMock = jest.fn(() => {});
    const userDocumentRefMock = { doc: docMock };
    const storageMock = { imagesFolderRef: imagesFolderRefMock };
    const dbMock = { ref: refMock, doc: docMock };
    wrapper = shallow(<UpdatePhoto {...props} />);
    wrapper.setState({ selectedFile: new File(['image'], 'test.png', { type: 'image/png' }) });
    refMock.mockReturnValueOnce(imagesFolderRefMock);
    refMock.mockReturnValueOnce({});
    docMock.mockReturnValueOnce(userDocumentRefMock);
    uploadBytes.mockImplementationOnce(uploadBytesMock);
    getDownloadURL.mockImplementationOnce(getDownloadURLMock);
    updateDoc.mockImplementationOnce(updateDocMock);
    listAll.mockImplementationOnce(listAllMock);
    await wrapper.instance().uploadFile();
    expect(uploadBytesMock).toHaveBeenCalled();
    expect(getDownloadURLMock).toHaveBeenCalled();
    expect(updateDocMock).toHaveBeenCalled();
    expect(updateProfilePictureMock).toHaveBeenCalledWith({ ...user, photoURL: 'newUrl' });
  });
}); */

import { render, screen, fireEvent } from "@testing-library/react";
import UpdatePhoto from "../components/UpdatePhoto";
import { Provider } from "react-redux";

describe("UpdatePhoto component", () => {
  test.only("renders file input and button", () => {
    render(<UpdatePhoto />);
    const fileInput = screen.getByLabelText(/file upload/i);
    expect(fileInput).toBeInTheDocument();
    const uploadButton = screen.getByRole("button", { name: /update photo/i });
    expect(uploadButton).toBeInTheDocument();
  });

  test("updates user profile picture on button click", async () => {
    const mockDispatch = jest.fn();
    const mockUser = {
      uid: "test-user-id",
      photoURL: "https://example.com/test.jpg",
    };
    const { getByLabelText, getByRole } = render(
      <UpdatePhoto
        user={mockUser}
        updateProfilePicture={mockDispatch}
        userId="test-user-id"
      />
    );

    const file = new File(["(⌐□_□)"], "test.jpg", { type: "image/jpeg" });
    fireEvent.change(getByLabelText(/file upload/i), { target: { files: [file] } });
    fireEvent.click(getByRole("button", { name: /update photo/i }));

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_PROFILE_PICTURE",
      payload: { uid: "test-user-id", photoURL: expect.any(String) },
    });
  });
});

